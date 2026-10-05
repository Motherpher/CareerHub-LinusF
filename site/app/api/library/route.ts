import { list, put, rename } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { randomUUID } from 'node:crypto';
import { loadCareerHubManifest } from '@/lib/manifest';

function prefix() {
  const manifest = loadCareerHubManifest();
  return `library/${manifest.profile_id}/`;
}

function safeName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/-+/g, '-').slice(0, 140) || 'document';
}

export async function GET() {
  try {
    const result = await list({ prefix: prefix() });
    const files = result.blobs.map((blob) => {
      const active = blob.pathname.includes('/active/');
      const parts = blob.pathname.split('/');
      const stored = parts[parts.length - 1] ?? blob.pathname;
      const displayName = stored.replace(/^[a-f0-9-]+--/i, '');
      return {
        pathname: blob.pathname,
        display_name: displayName,
        active,
        uploaded_at: blob.uploadedAt,
        size: blob.size,
        content_type: blob.contentType
      };
    });
    return NextResponse.json({ files });
  } catch {
    return NextResponse.json({ files: [], error: 'Library storage is not connected yet.' }, { status: 503 });
  }
}

export async function POST(request: Request) {
  const form = await request.formData();
  const file = form.get('file');
  if (!(file instanceof File)) return NextResponse.json({ error: 'Missing file.' }, { status: 400 });
  if (file.size > 4_300_000) return NextResponse.json({ error: 'Low-fi server upload currently supports files up to about 4.3 MB.' }, { status: 413 });

  const pathname = `${prefix()}active/${randomUUID()}--${safeName(file.name)}`;
  const blob = await put(pathname, file, { access: 'private', addRandomSuffix: false });
  return NextResponse.json({ uploaded: true, pathname: blob.pathname });
}

export async function PATCH(request: Request) {
  const body = await request.json();
  const pathname = typeof body?.pathname === 'string' ? body.pathname : '';
  const action = body?.action;
  if (!pathname.startsWith(prefix())) return NextResponse.json({ error: 'Invalid library path.' }, { status: 400 });
  if (action !== 'activate' && action !== 'deactivate') return NextResponse.json({ error: 'Invalid action.' }, { status: 400 });

  const targetState = action === 'activate' ? 'active' : 'inactive';
  const target = pathname.replace(/\/(active|inactive)\//, `/${targetState}/`);
  if (target === pathname) return NextResponse.json({ updated: true, pathname });
  const blob = await rename(pathname, target, { access: 'private' });
  return NextResponse.json({ updated: true, pathname: blob.pathname });
}
