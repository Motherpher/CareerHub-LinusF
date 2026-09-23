# CareerHub — Linus Fast

Private profiled instance of `Motherpher/CareerHubZero`.

## Contract

This repository contains **profile/config/state/artifacts only**. CareerHub motor logic, HRDM core, schemas and reusable workflows belong exclusively to `Motherpher/CareerHubZero`.

The visible CareerHub journey is:

**Find jobs → Analyse? → Apply**

## Profile-specific content

- `profile/candidate.yaml` — evidence-bounded Linus profile
- `profile/evidence_index.yaml` — provenance and verification support
- `profile/surfaces/` — alternative evidence-preserving profile emphasis
- `config/search_profile.yaml` — Linus-specific search configuration
- `data/job_vault.json` — sourced-job state
- `data/applications.json` — application/progression state
- `hrdm/runs/` — generated HRDM run artifacts
- `applications/cases/` — generated application artifacts
- `dashboard/` — generated view artifacts

## Engine

Canonical engine: `Motherpher/CareerHubZero`.

Current stack version is generated/synchronised from ZeroHub and recorded in `instance.yaml` and `stack.lock.yaml`.

## Privacy

Direct contact details, date of birth, national identifiers and street address are not committed.

## Non-drift rule

Profile files may change evidence, preferences and emphasis. This repository must not contain a local CareerHub engine or introduce new base commands/subsystems.
