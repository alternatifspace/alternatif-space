# partai.alternatif.space — Screen List
**Total: 38 screens across 3 phases**

---

## Phase 0 — 18 screens

### Auth & Onboarding (4)
- **S-01** · Landing / splash (unauthenticated entry point)
- **S-02** · Sign up
- **S-03** · Log in
- **S-04** · Onboarding explainer (shown once, first login only)

### Discovery (2)
- **S-05** · Browse parties
- **S-06** · Party public profile

### Party Creation (5)
- **S-07** · Create — Step 1: Choose starting point (Vanguard / Republic / Commune / Custom)
- **S-08** · Create — Step 2: Set governance parameters
- **S-09** · Create — Step 3: Party identity (name, logo, tagline, manifesto)
- **S-10** · Create — Step 4: Council toggle
- **S-11** · Create — Step 5: Review & publish

### Joining (3)
- **S-12** · Join confirmation (open join — instant)
- **S-13** · Application form (application join)
- **S-14** · Invite landing (invite-only — pre-activated CTA)

### Post-action moments (2)
- **S-15** · Post-join nudge ("Bendera kamu sudah terpasang. Pergi ke Mufakat.")
- **S-16** · Post-approval share flow (for party creator, after moderation clears)

### Profile (2)
- **S-17** · User profile (own — editable)
- **S-18** · User profile (other — read-only, shows party badge + history)

---

## Phase 1 — 13 screens

### Party Dashboard Shell (1)
- **S-19** · Dashboard home (feed overview, entry to all tabs)

### Internal Communications (5)
- **S-20** · Announcement feed
- **S-21** · Discussion thread list
- **S-22** · Discussion thread detail (replies)
- **S-23** · Position brief (read view)
- **S-24** · Notification centre

### Governance (5)
- **S-25** · Pulse check — create & results
- **S-26** · Manifesto amendment — propose (diff view)
- **S-27** · Manifesto amendment — active vote
- **S-28** · Recall petition — initiate & signature progress
- **S-29** · Recall vote — active vote

### Member Management (2)
- **S-30** · Member list (leader view — with approve/reject queue for application parties)
- **S-31** · Member detail (conduct actions: warn, mute, suspend, remove)

---

## Phase 2 — 7 screens

### Council (2)
- **S-32** · Council roles — manage (create, edit, delete roles)
- **S-33** · Council roles — appoint member to role

### Conduct & Appeals (1)
- **S-34** · Appeal log (public to all party members)

### Cross-platform powers (2)
- **S-35** · Official position stamp — apply flow (within mufakat context)
- **S-36** · Post-session ratification (simposium debrief)

### Dissolution & Succession (2)
- **S-37** · Voluntary dissolution — initiate + ratification vote
- **S-38** · Deputy designation + inactive leader caretaker state

---

## State-Dependent Screens

Some screens render differently based on context.

**S-06 Party public profile** has 8 states:
- Unauthenticated visitor
- Authenticated, no party (join CTA active)
- Authenticated, already in a different party (join CTA shows "Keluar dulu")
- Member of this party (no join CTA, member view)
- Leader of this party (edit controls visible)
- Pending moderation (only visible to creator)
- Dormant (desaturated, dormant badge)
- Dissolved (archived state, read-only, marked clearly)

**S-08 Governance parameters** has 2 states:
- Preset path (Vanguard / Republic / Commune): all fields pre-filled, CTA active immediately
- Custom path: all fields blank, CTA disabled until every parameter is set; completion counter shown

**S-28/S-29 Petition & Recall** have blocked states:
- Honeymoon active: petition blocked, explanation shown inline
- Below minimum member threshold: vote blocked, count shown
- Cooldown active (post-failed recall): days remaining shown
