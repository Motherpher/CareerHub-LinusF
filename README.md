# CareerHub — Linus Fast

Private personalised CareerHub profile repository connected to the canonical `Motherpher/CareerHubZero` software body.

## Contract

This repository contains **profile, search configuration, durable state, generated artifacts and protected personalisation**. CareerHub motor logic, HRDM core, schemas, reusable UI/runtime code and common workflows belong in `Motherpher/CareerHubZero`.

The visible CareerHub journey is:

**Profile → Search → Analyse → Apply → Track**

Supporting workspaces:

- **Library** — manage private source documents and active/inactive source state.
- **Improve my CareerHub** — submit usability/development wishes to the central Wish Bank.

## Active profile

- `profile/candidate_verified.yaml` — active verified-career evidence profile used by CareerHub.
- `profile/evidence_index.yaml` — provenance and verification support.
- `profile/surfaces/` — evidence-preserving career-surface emphasis.
- `config/search_profile.yaml` — Linus-specific Search Profile.
- `personalisation/` — protected Linus presentation, voice and design derivation.

## State and artifacts

- `data/job_vault.json` — sourced opportunity state.
- `data/applications.json` — application/progression state.
- `data/hrdm_ledger.json` — HRDM analysis ledger when present.
- `reports/hrdm/` — active and historical HRDM artifacts.
- `applications/cases/` — generated application artifacts.

## Engine

Canonical body: `Motherpher/CareerHubZero`.

`careerhub.yaml` is the versionless runtime manifest. Legacy per-profile motor locks are not part of the current unified-body architecture.

## Privacy

Direct contact details, date of birth, national identifiers and street address are not committed.

## Non-drift rule

Profile files may change evidence, preferences, search intent and presentation. This repository must not contain a local CareerHub motor or redefine reusable motor behaviour that belongs centrally.
