# CareerHub-LinusFast — Operating Model

## User journey
**Find → Analyse? → Apply**

The profiled hub adds two read-only meta-views: **Status** and **Napp**.

## Natural-language commands
- `CareerHub: Find` — source and triage opportunities against the search profile.
- `CareerHub: Analyse <job URL or job_id>` — run the full HRDM-R sequence.
- `CareerHub: Apply <job_id>` — create an evidence-bounded application case after HRDM.
- `CareerHub: Status` — show pipeline state.
- `CareerHub: Napp` — show market-response funnel by lane and profile surface.
- `CareerHub: Show profile <surface_id>` — show the signal-ordering surface without changing evidence.

## HRDM binding
Each selected job must run the canonical full sequence: intake → signals → concepts → hidden need → field logic → FunctionCore → DoD → assessment zones → candidate positioning → HCC.

Candidate Positioning must bind to a frozen snapshot of `profile/candidate.yaml`. Memory or prior application rhetoric may not add candidate facts.

## Napp measurement
Every market event records: opportunity, lane, surface, direction (inbound/outbound), stage and date. This supports response rates without collapsing different kinds of response into a single score.
