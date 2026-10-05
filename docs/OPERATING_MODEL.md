# CareerHub-LinusF — Profile Operating Model

## User journey

**Profile → Search → Analyse → Apply → Track**

Supporting workspaces are **Library** for source management and **Improve my CareerHub** for feedback into the central Wish Bank.

The journey and reusable runtime are defined in `Motherpher/CareerHubZero`. This repository supplies Linus-specific verified evidence, search configuration, state and protected personalisation.

## Profile boundary

`profile/candidate_verified.yaml` is the active evidence-bounded Career Profile. `config/search_profile.yaml` is the Search Profile and may express search intent that does not become career evidence.

Uploaded Library material does not silently mutate the active Career Profile. Sources move through active/inactive source state and evidence review before accepted changes may enter the verified profile.

## HRDM binding

For a selected role the central motor runs the canonical HRDM-R sequence and records analysis state centrally through the profile manifest paths. Candidate positioning remains bounded by verified profile evidence; memory or prior application rhetoric may not add candidate facts.

## State

`data/job_vault.json` stores discovered opportunities. `data/applications.json` stores application cases and progression. `data/hrdm_ledger.json`, when present, stores the analysis ledger referenced by the site.

## Motor boundary

`careerhub.yaml` is the canonical versionless manifest for this profile. Reusable logic and managed site capabilities belong in CareerHubZero and are pushed into compatible profile hubs. Profile-specific presentation and evidence stay local.
