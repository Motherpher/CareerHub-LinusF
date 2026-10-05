'use client';

import { FormEvent, useCallback, useEffect, useState } from 'react';

type LibraryFile = {
  pathname: string;
  display_name: string;
  active: boolean;
  uploaded_at: string;
  size: number;
  content_type?: string;
};

export default function LibraryClient() {
  const [files, setFiles] = useState<LibraryFile[]>([]);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  const reload = useCallback(async () => {
    const response = await fetch('/api/library', { cache: 'no-store' });
    const data = await response.json().catch(() => ({}));
    setFiles(data.files ?? []);
    if (!response.ok && data.error) setMessage(data.error);
  }, []);

  useEffect(() => { void reload(); }, [reload]);

  async function upload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true); setMessage('');
    const form = new FormData(event.currentTarget);
    const response = await fetch('/api/library', { method: 'POST', body: form });
    const data = await response.json().catch(() => ({}));
    setMessage(response.ok ? 'Document uploaded and activated.' : (data.error ?? 'Upload failed.'));
    if (response.ok) { event.currentTarget.reset(); await reload(); }
    setBusy(false);
  }

  async function setActive(file: LibraryFile) {
    setBusy(true); setMessage('');
    const response = await fetch('/api/library', {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ pathname: file.pathname, action: file.active ? 'deactivate' : 'activate' })
    });
    const data = await response.json().catch(() => ({}));
    setMessage(response.ok ? (file.active ? 'Source deactivated.' : 'Source activated.') : (data.error ?? 'Update failed.'));
    if (response.ok) await reload();
    setBusy(false);
  }

  return (
    <div className="section-stack">
      <form className="wish-form" onSubmit={upload}>
        <label>
          <span>Add a career source</span>
          <input type="file" name="file" required accept=".pdf,.doc,.docx,.txt,.md,.rtf,.odt,.png,.jpg,.jpeg" />
        </label>
        <p className="wish-privacy">Low-fi server upload currently supports files up to about 4.3 MB. Uploaded files are private and active by default.</p>
        <button disabled={busy} type="submit">{busy ? 'Working…' : 'Upload document'}</button>
      </form>

      {message ? <p role="status" className="wish-status">{message}</p> : null}

      <div className="section-stack">
        {files.length ? files.map((file) => (
          <div className="row" key={file.pathname}>
            <div>
              <strong>{file.display_name}</strong>
              <div className="muted">{file.active ? 'ACTIVE — available to CareerHub' : 'INACTIVE — retained but excluded'} · {Math.max(1, Math.round(file.size / 1024))} KB</div>
            </div>
            <div className="inline-actions">
              <a className="button" href={`/api/library/file?pathname=${encodeURIComponent(file.pathname)}`} target="_blank" rel="noreferrer">Open</a>
              <button className="button" type="button" disabled={busy} onClick={() => void setActive(file)}>{file.active ? 'Deactivate' : 'Activate'}</button>
            </div>
          </div>
        )) : <div className="empty-state">No uploaded library sources yet.</div>}
      </div>
    </div>
  );
}
