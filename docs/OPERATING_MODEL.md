# CareerHub-LinusF — Profile Operating Model

## User journey

**Find → Analyse? → Apply**

The journey and motor are defined only in `Motherpher/CareerHubZero`. This repository supplies Linus-specific profile evidence, search configuration and durable state.

## HRDM binding

For a selected role the central motor runs the canonical HRDM-R sequence: intake → signals → concepts → hidden need → field logic → FunctionCore → DoD → assessment zones → candidate positioning → HCC.

Candidate Positioning is bound to the profile evidence supplied by this instance. Memory or prior application rhetoric may not add candidate facts.

## State

`data/job_vault.json` stores discovered jobs. `data/applications.json` stores chosen/application cases and their canonical progression through applied/contacted/portfolio/interview/meeting/offer/denied/withdrawn/archived states.

No profile-local subsystem may redefine the CareerHub base contract.
