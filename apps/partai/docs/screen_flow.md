# partai.alternatif.space — Screen Flow

Screen IDs reference the screen list (SCREENS.md).

---

## Journey 1 — New user joins a party (open join)

```
S-01  Landing
  ↓ "Mulai" / "Daftar"
S-02  Sign up
  ↓ account created
S-04  Onboarding explainer
  ↓ "Lihat partai"
S-05  Browse parties
  ↓ taps a party card
S-06  Party public profile
  ↓ "Bergabung"
S-12  Join confirmation
  ↓ automatic
S-15  Post-join nudge → mufakat.alternatif.space
```

---

## Journey 2 — New user applies to join a gated party

```
S-01 → S-02 → S-04 → S-05 → S-06
  ↓ "Lamar" (application-gated party)
S-13  Application form
  ↓ submits
S-06  Party profile (pending state — "Lamaran sedang ditinjau")
  ↓ leader approves → notification received
S-15  Post-join nudge → mufakat

If rejected: stays on S-06 with rejected state. Can apply again or browse elsewhere.
```

---

## Journey 3 — User arrives via invite link

```
[Invite link via WhatsApp / Telegram]
  ↓
S-14  Invite landing (party profile, join CTA pre-activated)
  ↓ if not logged in → S-03 Log in (or S-02 Sign up) → back to S-14
  ↓ "Bergabung"
S-12  Join confirmation
  ↓
S-15  Post-join nudge → mufakat
```

---

## Journey 4 — User creates a party

```
S-03 / S-04 (logged in, no party yet)
  ↓ "Buat partai" CTA (browse page or onboarding)
S-07  Step 1 — Choose starting point
  ↓
S-08  Step 2 — Set governance parameters
  ↓
S-09  Step 3 — Party identity + manifesto
  ↓
S-10  Step 4 — Council toggle
  ↓
S-11  Step 5 — Review & publish
  ↓ submitted for moderation
S-06  Party profile (pending state — "Sedang ditinjau")
  ↓ moderation approves → notification
S-16  Post-approval share flow
  ↓ shares or dismisses
S-19  Dashboard home (now leader)

If user already has a party: wall screen — "Kamu sudah punya partai.
Keluar dulu kalau mau bikin yang baru."
```

---

## Journey 5 — User leaves a party and joins another

```
S-17  Own profile (or S-06 current party profile)
  ↓ "Keluar dari partai"
  [Confirmation dialog: leaving is logged on profile history]
  ↓ confirms
S-05  Browse parties (flag removed, now partyless)
  ↓ finds new party → S-06
  ↓ joins via Journey 1 / 2 / 3
S-15  Post-join nudge
```

---

## Journey 6 — Returning user, goes to party dashboard

```
S-03  Log in
  ↓ session restored
S-19  Dashboard home
  ↓ tabs
S-20  Announcements  ←→  S-21  Discussions  ←→  S-30  Members
```

---

## Journey 7 — Leader runs a manifesto amendment vote (Phase 1)

```
S-19  Dashboard
  ↓ "Tata Kelola" tab
S-26  Propose amendment (writes new version, diff generated)
  ↓ submits → members notified
S-27  Active vote (visible to all members, countdown)
  ↓ vote closes (GitHub Actions cron)
  [Pass] → S-06 Party profile (manifesto updated, change logged)
  [Fail] → S-27 shows result, proposal archived
```

---

## Journey 8 — Member initiates recall petition (Phase 1)

```
S-19  Dashboard → Tata Kelola tab
  ↓ "Mulai petisi recall"
  [Blocked if honeymoon active → blocked state shown inline]
S-28  Petition — live signature counter
  ↓ other members sign
  [Threshold reached → recall vote auto-created]
S-29  Recall vote — 72-hour countdown, Remove / Keep
  ↓ vote closes
  [Pass] → leader removed, deputy becomes caretaker
           → S-06 public profile updated with outcome note
  [Fail] → petition archived, 30-day cooldown begins
           → S-06 public profile updated with outcome note
```

---

## Journey 9 — Leader manages a member conduct action (Phase 2)

```
S-30  Member list
  ↓ taps member
S-31  Member detail
  ↓ issues: warn / mute / suspend / remove
  [If governance config requires vote → proposal created → S-27 variant]
  [If leader authority is sufficient → action applied immediately]
S-34  Appeal log (if member appeals — visible to all members)
  ↓ leader or council affirms / reverses
```

---

## Journey 10 — Leader dissolves the party (Phase 2)

```
S-19  Dashboard → settings area
  ↓ "Bubarkan partai" (leader-only, non-delegable)
S-37  Dissolution — initiate + ratification vote (50%+1, min 5 members)
  ↓ members vote
  [Pass] → party archived → S-06 shows dissolved state (public, permanent)
  [Fail / cancelled] → party continues normally
```

---

## Journey 11 — Council setup (Phase 2)

```
S-19  Dashboard
  ↓ Council tab (if enabled)
S-32  Manage roles — create role, name it, assign permissions, set stackability
  ↓ role created
S-33  Appoint member to role
  [Vanguard config: leader assigns immediately]
  [Republic config: leader assigns, 24h contest window]
  [Commune config: vote required → S-27 variant]
```

---

## Navigation Reference

```
Public (unauthenticated)
  S-01  Landing
  S-05  Browse parties
  S-06  Party public profile
  S-14  Invite landing
  S-18  User profile (others)

Auth
  S-02  Sign up
  S-03  Log in
  S-04  Onboarding explainer (once)

Authenticated, no party
  S-05, S-06 (join CTAs active)
  S-07 → S-11  Create party flow

Authenticated, member
  S-15  Post-join nudge
  S-17  Own profile
  S-19  Dashboard (Phase 1)
  S-20 – S-24  Communications (Phase 1)
  S-25 – S-29  Governance (Phase 1)

Authenticated, leader (superset of member)
  S-16  Post-approval share flow
  S-30 – S-31  Member management (Phase 1)
  S-32 – S-33  Council (Phase 2)
  S-37  Dissolution (Phase 2)
  S-38  Deputy designation (Phase 2)
```
