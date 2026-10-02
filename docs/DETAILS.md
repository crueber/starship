# Starship Simulator

A real-time 3-D starship simulator that runs in the browser, **fully offline**. Fly a ship through the Solar System and between nearby stars,
on real orbits, under a sky built from real star catalogues.

**To run it: open `index.html`** (double-click; Chrome, Edge, Brave, Firefox and Safari with WebGL2). No server, no install, no network.
The page only reads local files (`config.js`, `data/data-bundle.js`, `assets/textures.js`, `dist/app.js`).
If you prefer a server: `python3 -m http.server` in this folder, then open `http://localhost:8000`.

It starts with a cinematic tour of the Solar System. Press **T** (or touch any flight control) to take the helm.

---

## Controls

| Key / mouse | Action |
|---|---|
| `W` / `S` | throttle up / down (logarithmic: 0.5 m/s … 0.8 c) |
| `A` `D` / `R` `F` / `Q` `E` | yaw / pitch / roll |
| `X` | cut throttle · cancel autopilot · drop warp |
| mouse **drag** | orbit the camera around the ship (**never changes heading**) |
| mouse **wheel** | zoom from first-person out to ~1,500 km (ship and nearby planet in one view); works during the tour too |
| **right-drag** or `Shift`+drag | steer the ship |
| `C` / `V` | recentre the camera / toggle first-person |
| `G` | engage / drop the warp bubble · `]` `[` step the warp up / down |
| `1`–`8`, `0` | time compression ×1 … ×10 000 000 · `0` = auto (autopilot picks it) |
| `P` / AUTO | autopilot (cruise control) on / off for the set course |
| `N` | navigation panel: search box (2+ characters, any catalogue star system), body/system list · click a name in the list *or a label in the view* to select it · `Enter` = fly to orbit, `Shift+Enter` = approach and hold |
| `T` | tour on / off · `,` settings · `O` orbit lines · `L` labels · `H` hide interface · `?` help |

The interface is deliberately small and monochrome. Everything else is in **`config.js`** or the in-app settings panel (`,`).

## Flight model

The engine only pushes along the ship's own axis. The throttle sets a *commanded speed*; the flight computer fires the engine for the difference.
To slow down it swings the ship tail-first (retrograde, `ship.flipRateDegPerSec`), burns against the motion, then turns back to face the direction of travel.
The engine glow and the HUD "engine" row show real output only: *thrusting*, *turning to brake*, *retro burn* or *coasting*. The autopilot does the same
(accelerate → coast → flip → burn → orbit). Steering without touching the throttle bends the course through the engine, not by magic.
`npm run test:flip` checks that the ship really turns around and never burns nose-forward while slowing.

## Tours

Two kinds of tour (bottom-right, **TOUR** row), each at two paces:

* **SYSTEM**: visits the planets of the star system you are in (the curated Solar System list, or a generated list in another system).
* **STARS**: warps from star system to star system, nearest first, and settles into orbit around a world at each one (never repeating until it has done them all).
* **FAST**: time compression is automatic (fast while travelling, slowed to a pretty orbit speed at each stop).
* **SLOW**: you set the time compression with the TIME buttons; stops last twice as long. Pressing a TIME button during a fast tour switches it to slow, and AUTO switches it back. The FAST / SLOW button changes the pace live.

While time is compressed, a small watch dial in the top-left clock panel shows it: a lazy second hand at ×1, then a hand that spins faster with every decade, trailing a glowing sweep that fills the whole dial at the top of the range. Chevrons follow the clock readout, and at very high compression a faint cool glow breathes in the corners of the screen (`ui.timeGlow` turns that off).

## Visitors (other people flying right now)

**Opt-in and peer to peer.** Nothing connects until you press **VISITORS > JOIN**. Then your browser meets other visitors' browsers directly over WebRTC (the [Trystero](https://github.com/dmotz/trystero) library, with public Nostr relays used only to introduce browsers to each other; the relay list can be overridden in `config.js` > `visitors.relays`). Everyone using the same `visitors.appId` + `visitors.room` meets.

* **Privacy:** it is peer to peer, so the people you connect to can see your network address, the same as in a video call. There are no accounts and no server of ours; nothing is stored. The panel says this before you join.
* **Callsigns:** a random registry-style name such as *ISV Calliope NCC-4471*, not editable; **RE-ROLL** gives a new one (at most every 2 s).
* **What is sent** (about twice a second): your callsign, where you are (the system and the body you are bound to, plus a galactic position), your measured velocity, your heading and which engines are lit. Messages from others are validated and clamped before use.
* **Who is here:** the panel (and the button, `VISITORS · 3`) counts everyone present, you included, and lists you as the first row, so you can always tell you have joined even when nobody else is there yet.
* **In the system map:** visitors in your system appear as small blue diamonds that send out a ping ring every few seconds, each on its own schedule, so someone moving around catches the eye. The map caption counts them.
* **How they look:** visitors in view get a small diamond with their callsign and distance (tinted by engine: orange rocket, white cruise, blue warp). Within 4 km they are drawn as ships, with lit engines. A visitor in your system who is off screen gets an arrow on the screen edge pointing to them, with their callsign. Everyone is shown in real time whatever time compression either of you is running, so at high compression they simply zip by.
* **Limits:** up to 24 visitors; a visitor not heard from for 12 s is dropped. The matchmaking relays are public and can be flaky (the panel reports it if none can be reached); some strict networks block peer-to-peer connections altogether (there is no relay server for the data itself).
* `npm run test:visitors` checks the network-free parts; `npm run test:visitors:e2e` launches two real browsers that must find each other over the public relays.

## System map

A small round top-down map sits on the right edge (`M` toggles it, `ui.systemMap` turns it off; it hides itself on short windows). It shows the star system you are in: the star, each planet on its orbit at its true bearing (radius is log-scaled so the inner worlds stay visible), dwarf planets as fainter dots, the world you are orbiting or have selected ringed, and your ship as a triangle pointing along its heading, with a pale wedge for where the camera is looking. A dotted line runs to the target of a set course. The caption counts the planets (and dwarf planets); it is hidden between stars.

## Gravity-well gauge

A gauge at the top centre is always on. It is a log-scale bar from the star's surface (bright = deep in the well) out to its **heliopause**, with the planets' orbit ticks, decade marks in AU and a marker for the ship. Below it: distance from the star, escape speed and local gravity at the ship, and how far you are to the heliopause (as a percentage and a distance). Between stars it shows the nearest star's well, with the marker pinned at the right edge and the distance outside its heliopause.

## Camera and attitude

The camera is free-floating: it keeps its own orientation and follows only your own steering (keys, right-drag). When the flight computer turns the ship (flip to brake, aligning on a course) the ship turns in the view while the stars stay put. `C` or a double-click glides the camera back behind the ship; zoomed right in (first person) it rides with the ship. Turns ramp up and down (`ship.angularAccelDegPerSec2`) and the main engine bell gimbals up to `ship.gimbalMaxDeg` to make them. During an autopilot braking burn the ship stays tail-first until arrival.

## Engines and the drive slider

The ship has three engines, and the **DRIVE** slider (bottom right) is coloured to match:

| Zone | Engine | What you see |
|---|---|---|
| **orange**: 0 – 100 km/s | **Rocket** (bell at the stern) | standard rocket exhaust with shock diamonds. A real engine along the nose, limited to `ship.maneuverAccelMs2` (1000 m/s²); slowing down means turning tail-first and burning against the motion. |
| **white**: 100 km/s – 0.8 c | **Nacelles**, cruise drive | no exhaust; both nacelles glow soft white, brighter as the drive spools up. The speed follows the slider over a few seconds (`ship.driveSpoolSec`), the heading follows the nose. It is a drive state, not a coasting velocity: bring the slider down and the speed falls with it. |
| **blue**: 1 c – 10⁶ c (7 notches) | **Nacelles**, warp | soft blue thrum that quickens with the requested speed, inside the flat warp bubble. Only outside heliopauses. |

Click or drag the slider, scroll over it, or use `=` / `-` to step through the notches; `W`/`S` is still a continuous throttle. The thumb is the command, the thin bar is the actual speed catching up. The legend labels dim and brighten with each engine's power. Time compression stays separate (and works in warp up to ×100).

**Arrival**: the autopilot brakes with the drive (nacelles spool down, no flip), swings tail-first early and slowly, finishes with the rocket, and then runs an insertion burn that spins the ship up to the circular speed at the destination orbit (default **1000 km** altitude, `autopilot.arrivalOrbitAltKm`; the altitude slider in the selection panel overrides it). Attitude changes are deliberately slow and critically damped (`ship.attitudeGain`, `attitudeLagSec`, `maxTurnDegPerSec`).

## What you can do

* **Select anything and see where it is.** The **altitude** slider (log scale, safe orbit → 40 radii) or a typed value (`3000`, `250 km`, `0.01 AU`) sets how high you orbit or hold; pressing ORBIT while already circling that body spirals you to the new altitude. A selected body or system gets an on-screen marker (a bracket when visible, an edge arrow when not) and a small panel with **APPROACH** (stop and hold 8 radii out, at rest) and **ORBIT** (settle into the safe low orbit). A second marker always points home: **EARTH** inside the Solar System, **SOL** everywhere else.
* **Set course ≠ autopilot.** Choosing a destination only sets the course: the ship turns its nose onto it and holds there, and the course panel shows how far off you are. Fly it yourself (throttle, speed presets, warp steps), or press **AUTO** (top right, or `P`) to hand over to the autopilot's cruise control; touching the throttle takes the helm back and keeps the course.
* **Courses never cut through a body.** The autopilot checks its straight line against every body's safety sphere and flies a detour round the first one in the way (`autopilot.pathClearance`).

* **Go anywhere in the current system**: every planet, dwarf planet and 22 major moons. The ship accelerates, cruises, brakes and drops into a circular
  *safe low orbit*. Nothing can be landed on; every body has a hard wall at a safe orbit radius derived from its gravity.
* **Go to any star system within 10 ly of where you are** (the list re-computes as you travel). Alpha Centauri, Proxima, Sirius, Barnard's Star,
  Wolf 359, Lalande 21185, ε Eridani, τ Ceti, TRAPPIST-1 (once you are close enough) … all the names come from IAU / SIMBAD.
* **Warp:** the step you click is the step you get (the autopilot stops ramping once you choose). The bubble is a flat lens across the ship's X/Y plane; streaks of light stream past it, faster and longer with every step.
* **Inside a heliopause** the speed limit is **0.8 c** (relativistic aberration and Doppler shift are visible near the top).
  **Outside** it you can engage the Alcubierre-style warp bubble: **1 → 10 → 100 → … → 1 000 000 c**. 10 ly at top step takes about **5 minutes**
  of real time (that is simply the physics: 10 ly / 10⁶ c = 5.3 min). Warp travel keeps its own pacing; time compression never applies to it.
* **Approaching any star's heliopause** the ship brakes itself: a governor keeps the warp speed below `0.8 c + k·distance-to-boundary`, so each decade
  of speed is shed in ~1 s and the ship reaches **exactly 0.8 c at the boundary**, then continues sub-light. This also protects manual warp flights.
* **Time compression** (sub-light only) from real time to ×10⁷, or *auto*: the autopilot targets a leg length in wall-clock seconds and slows the clock near bodies.
  Between stars (outside every heliopause) compression is limited so the apparent speed stays under `time.interstellarMaxC` (300 c): otherwise ×10⁷ at 0.8 c would out-run the warp drive and hop over heliopauses.

## What is real, what is generated

| Thing | Source | Notes |
|---|---|---|
| ~108,700 stars | **Hipparcos** (ESA 1997, brightest 100,000 + every star within 100 ly) merged with **Gaia DR3** (10,017 sources inside 100 ly, because Hipparcos misses faint red dwarfs) | positions propagated to the build epoch; 31 % of the fainter Hipparcos stars have a *spectro-photometric* distance (flagged in the file) |
| star colours | spectral types → temperature → blackbody colour (B−V / BP−RP where no type exists; 359 stars with no colour at all are flagged and use 5 500 K) | |
| Milky Way glow & dust lanes | **Gaia DR3** flux of the unresolved starlight (G > 9.5), 40 M-source random sample, all-sky map at 0.23° (2048×1024) | real dust lanes/bulge; modulated by a 3-D galaxy model when you are far from the Sun |
| 10 nearest galaxies | **McConnachie 2012** (+ SIMBAD sizes for LMC; sizes of two diffuse systems derived from the catalogue's magnitude and surface brightness) | the nearest ten are mostly ultra-faint dwarfs; the SMC is #11, Andromeda is far outside. `build.galaxies.count/include` change this |
| planets, moons, dwarf planets | **JPL**: Standish mean elements (planets), Horizons osculating elements (moons), SBDB (dwarf planets), JPL satellite physical parameters | analytic Kepler orbits; start time = your computer's clock |
| surface maps | Solar System Scope (CC BY 4.0) for Sun, Mercury, Venus, Earth, Moon, Mars, Jupiter, Saturn, Uranus, Neptune | other moons / dwarf planets use **procedural surfaces**, labelled as such |
| known exoplanets | **NASA Exoplanet Archive** (1,299 planets around 894 stars that are in the catalogue) | orbits from the archive; unknown numbers are estimated and marked *est.*; their *appearance* is artistic |
| planets of stars with no confirmed planet | **procedurally generated, always labelled FICTIONAL** | frost line, habitable zone (Kopparapu 2013), rocky inside / giants outside, belts, Hill-radius spacing, seeded by star id so each system looks identical every visit |
| heliopause radii | Sun: 121 AU (Voyager 1). Others: scaled from an estimated stellar wind (class, size, luminosity); override per star in `heliopause.knownAu` | estimates, not measurements |

## The data build

The simulator never touches the network. All data are produced once by a standalone script that is driven by the same `config.js`:

```
node tools/build-data.mjs              # downloads (cached in data/raw/), trims, writes data/ and assets/textures.js
node tools/build-data.mjs --offline    # rebuild from data/raw/ only
node tools/build-data.mjs --refresh    # ignore caches
node tools/build-data.mjs --only=stars,galaxies,ephemeris,skymap,textures
```

Change `build.stars.nearRadiusLy`, `brightCount`, `brightMaxMagnitude`, `galaxies.count`, … in `config.js`, re-run, done.
`data/manifest.json` records every source URL, version/retrieval date, row counts, the configuration used and a SHA-256 of each output.

**If a source cannot be reached the script says so and exits non-zero**, printing the exact URL and the exact path to put the file at
(`data/raw/…`). It never substitutes invented data. Hand-entered constants (IAU pole directions, rotation periods, geometric albedos, ring
boundaries) are listed in `tools/lib/ephemeris.mjs` and flagged `curated` in the manifest.

| File | Content |
|---|---|
| `data/stars.bin` | 24-byte records: f32 x,y,z (pc, ICRS) · i16 absolute V magnitude · u16 Teff · u8 flags · u8 luminosity class · u32 HIP |
| `data/names.json`, `exoplanets.json`, `galaxies.json`, `ephemeris.json`, `milkyway.bin` | names/designations, planets, galaxies, solar system, light map |
| `data/data-bundle.js` | the same data as one base-64 script (browsers refuse `fetch` on `file://`); the loader falls back to the individual files over http |
| `assets/textures.js` | planet maps as data-URIs |

## How it keeps working at every speed

* Positions are doubles; the GPU only ever sees **camera-relative** numbers (stars use a hi/lo float split), with a **logarithmic depth buffer**.
* The ship lives in the frame of the dominant body (planet/moon/star) so it co-moves with it; orbits are analytic Kepler orbits, so there is nothing to
  integrate and nothing to blow up at ×10⁷.
* The autopilot integrates its guidance law in closed form (exact for any step), and every step is a *swept* segment-vs-sphere test against each body's safe-orbit wall.
* Real time is clipped to 0.1 s and consumed in fixed 1/60 s physics steps. `dev/test-sim.mjs` runs 16 autopilot legs, 4 interstellar legs and free flight at every compression
  level with randomised frame times (including 0.1–5 s hitches) and checks for NaN and wall violations.
* Brightness is photometric: magnitude → irradiance → PSF; exposure follows the illumination around the ship, so stars vanish in sunlight and appear in a planet's shadow.
  Bloom is energy-capped, NaN/Inf-sanitised and gentle.

## Layout

```
index.html  config.js  README.md
data/            generated data + manifest (data/raw = cached downloads, safe to delete)
assets/          generated texture bundle
dist/app.js      the bundled simulator (three.js + src/)
src/             simulator source (universe/, sim/, render/, ui/)
shared/          code shared by the build and the simulator (astrophysics helpers)
tools/           build-data.mjs and its modules
dev/             dev-only: esbuild bundler, headless-browser screenshot / test harnesses
```

Screenshots from the production bundle are in `docs/` (images are curated by hand). `node dev/smoke.mjs` takes new ones into `docs/` and asserts there are no page errors and no non-`file:` requests.

Dev tests (`npm run test:sim`, `npm run smoke`) need the dev dependencies: `cd dev && npm install` first (the only time anything needs the network, and only for development).

Rebuilding the bundle after editing `src/`: `cd dev && npm install && node bundle.mjs` (the delivered folder already contains the built `dist/app.js`).

## Honest limitations

* Planet maps are 2k–4k. At the lowest allowed orbit (a few % of a radius above the surface) they are magnified 5–10×; band-limited procedural detail is added, but it is soft, not photographic.
* Saturn's rings are physically dim in 2026: the Sun is within a few degrees of the ring plane (equinox was 2025). Set `sim.startTime` to another date to see them broadside and lit.
* The warp look is deliberately artistic (the Alcubierre metric has no agreed optics): the forward view reads best; side/trailing views are dark red smears of the stretched sky map.

* Binary companions are fixed at their catalogue positions (no orbital motion); planets of a multiple system orbit one star with stability limits at ~⅓ of the separation.
* Brown dwarfs seen only in the infrared (Luhman 16, WISE 0855) are in neither Hipparcos nor Gaia G, so they are absent.
* The Gaia map under-counts the most crowded bulge fields, so the Galactic-centre glow is a lower bound.
* Asteroid/Kuiper belts are drawn as a faint particle band with a visibility gain (`visuals.belts.gain`): real asteroids are invisible to a camera.
* The tour and the star-floor exposure (`visuals.stars.minGain`) are deliberately photographic composites; set `minGain` to 0 for strictly physical exposure.
* Planets of known exoplanet hosts are artist impressions built from the archive's mass/radius/temperature; the archive has no imagery.

## Credits

* **three.js** (MIT). **Hipparcos / ESA 1997** via CDS. **Gaia DR3** — ESA/Gaia/DPAC (CC BY-SA 3.0 IGO). **SIMBAD / VizieR** — CDS, Strasbourg.
  **NASA Exoplanet Archive** — NASA/IPAC. **JPL Horizons, SBDB, Solar System Dynamics** — NASA/JPL. **McConnachie (2012), AJ 144, 4.**
  **IAU Catalog of Star Names** (WGSN). **Planet textures** — © Solar System Scope, CC BY 4.0, based on NASA imagery.
