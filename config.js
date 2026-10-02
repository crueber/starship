/*
 * STARSHIP SIMULATOR — single configuration file.
 *
 * This file is read by BOTH:
 *   - tools/build-data.mjs  (the one-off data build: uses the `build` section)
 *   - the simulator in the browser (index.html loads this as a plain <script>)
 *
 * Runtime sections (sim / ship / warp / tour / time / visuals / ui) take effect on reload.
 * Changing anything under `build` needs a rebuild:   node tools/build-data.mjs
 * Many visual settings can also be tweaked live from the in-app settings panel (press ,).
 *
 * Units: distances in km unless a name says otherwise (ly = light years, pc = parsecs, au).
 */
window.SIM_CONFIG = {

  /* ──────────────────────────  DATA BUILD (tools/build-data.mjs)  ────────────────────────── */
  build: {
    // Epoch the star positions are propagated to (proper motion) and the Horizons elements are taken at.
    // "auto" = today's date (UTC) when the build runs, or an ISO string such as "2026-10-01".
    epoch: "auto",

    stars: {
      nearRadiusLy: 100,           // include EVERY star closer than this (Gaia DR3 fills what Hipparcos misses)
      brightCount: 100000,         // plus the N brightest stars of Hipparcos
      brightMaxMagnitude: null,    // optional extra cut: drop anything fainter than this V mag (null = off)
      hipMinParallaxSNR: 3,        // Hipparcos distance trusted only above this parallax S/N, else estimated
      hipNearMinSNR: 5,            // S/N required for a Hipparcos star to count as "inside nearRadiusLy"
      photometricDistanceClampPc: [20, 4000],
      gaia: {
        enabled: true,
        minParallaxOverError: 10,  // quality cut for the nearby-star sample
        maxRuwe: null,             // e.g. 1.4 to drop poor astrometric fits (also drops some real binaries)
      },
    },

    names: {
      simbad: true,                // look up common names (GJ / Bayer / proper names) for nearby stars
      simbadRadiusLy: 40,          // only stars closer than this are looked up (destination list range + margin)
      labelRadiusLy: 40,           // keep designation/spectral-type text for stars closer than this
      // Guaranteed destination names. Give `hip` or `gaia` (DR3 source id); `distLy` is a sanity check (±15%).
      overrides: [
        { hip: 71683, name: "Alpha Centauri A", system: "Alpha Centauri", distLy: 4.37 },
        { hip: 71681, name: "Alpha Centauri B", system: "Alpha Centauri", distLy: 4.37 },
        { hip: 70890, name: "Proxima Centauri", distLy: 4.25 },
        { hip: 87937, name: "Barnard's Star", distLy: 5.96 },
        { hip: 32349, name: "Sirius A", system: "Sirius", distLy: 8.6 },
        { gaia: "2947050466531873024", name: "Sirius B", system: "Sirius", distLy: 8.6 },
        { hip: 16537, name: "Epsilon Eridani", distLy: 10.5 },
        { gaia: "5140693571158739840", name: "Luyten 726-8 A", system: "Luyten 726-8", distLy: 8.7 },
        { gaia: "5140693571158946048", name: "Luyten 726-8 B", system: "Luyten 726-8", distLy: 8.7 },
        { gaia: "3864972938605115520", name: "Wolf 359", distLy: 7.9 },
      ],
    },

    galaxies: {
      count: 10,                   // the N nearest galaxies in the McConnachie (2012) catalogue
      include: [],                 // extra names to force in, e.g. ["Andromeda", "Triangulum"]
    },

    exoplanets: {
      keep: "matched",             // "matched" = planets whose host star is in stars.bin, "all" = whole archive
    },

    ephemeris: {
      // Moons to fetch from JPL Horizons (osculating elements at the epoch, ecliptic J2000).
      moons: {
        Earth:   [301],
        Mars:    [401, 402],
        Jupiter: [501, 502, 503, 504],
        Saturn:  [601, 602, 603, 604, 605, 606, 608],
        Uranus:  [705, 701, 702, 703, 704],
        Neptune: [801, 808],
        Pluto:   [901],
      },
      dwarfPlanets: [1, 134340, 136108, 136472, 136199],   // Ceres, Pluto, Haumea, Makemake, Eris (SBDB numbers)
    },

    // Real Milky Way light: Gaia DR3 flux sums per sky pixel (uniform random subsample, bright catalogue stars excluded).
    skymap: {
      enabled: true,
      healpixLevel: 8,             // 0.23° pixels
      sampleRows: 40000000,        // rows of gaia_source (random_index < N) ≈ 2.2 % of 1.8 billion; more = smoother, slower
      chunkRows: 4000000,          // fetched as synchronous queries of this many rows each (cached separately)
      minGMag: 9.5,                // stars brighter than this are drawn individually from stars.bin, so excluded from the glow
      width: 2048, height: 1024,   // output equirectangular map in galactic coordinates
    },

    textures: {
      enabled: true,
      // Preferred resolution per body key; the build falls back to a lower one if a size is missing.
      // keys are either a body name or an individual texture name (earth_daymap, earth_nightmap, earth_clouds, venus_surface …)
      resolution: { sun: "2k", mercury: "2k", venus: "2k", earth_daymap: "8k", earth_nightmap: "4k", earth_clouds: "4k", moon: "4k", mars: "4k",
                    jupiter: "4k", saturn: "4k", uranus: "2k", neptune: "2k" },
    },

    // Every upstream URL lives here so you can point the build at a mirror or a local file server.
    sources: {
      hipparcos:   "https://cdsarc.cds.unistra.fr/ftp/I/239/hip_main.dat",
      gaiaTap:     "https://gea.esac.esa.int/tap-server/tap/sync",
      exoTap:      "https://exoplanetarchive.ipac.caltech.edu/TAP/sync",
      vizier:      "https://vizier.cds.unistra.fr/viz-bin/asu-tsv",
      simbadTap:   "https://simbad.cds.unistra.fr/simbad/sim-tap/sync",
      iauNames:    "https://www.pas.rochester.edu/~emamajek/WGSN/IAU-CSN.txt",
      horizons:    "https://ssd.jpl.nasa.gov/api/horizons.api",
      sbdb:        "https://ssd-api.jpl.nasa.gov/sbdb.api",
      jplElements: "https://ssd.jpl.nasa.gov/planets/approx_pos.html",
      jplSatPhys:  "https://ssd.jpl.nasa.gov/sats/phys_par/",
      textureBase: "https://www.solarsystemscope.com/textures/download/",
    },
  },

  /* ──────────────────────────  RUNTIME  ────────────────────────── */

  sim: {
    startTime: "now",             // "now" (real clock) or an ISO date such as "2031-04-02T12:00:00Z"
    startWithTour: true,          // begin in the cinematic solar-system tour (press T / click TOUR to take over)
    maxFrameDt: 0.1,              // real seconds. Longer frames (tab switch, hitch) are clipped so physics never takes one giant step
    physicsStep: 1 / 60,          // real seconds per physics sub-step (fixed); the loop runs as many as needed, up to maxSubsteps
    maxSubsteps: 8,
    seed: 1337,                   // master seed for everything procedural (planet systems, belts, noise textures)
  },

  /* Time compression applies to SUB-LIGHT flight only. Warp travel keeps its own real-time pacing. */
  time: {
    steps: [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7],   // selectable multipliers (first = real time)
    initialStep: 0,
    interstellarMaxC: 300,        // between stars (outside every heliopause) time compression is limited so the apparent speed never exceeds this many c: faster than that would hop over heliopauses and undercut the warp pacing (0 = no limit)
    auto: {
      enabled: true,              // autopilot picks compression itself so a leg takes about targetSeconds
      targetSeconds: 28,          // wall-clock duration to aim for per sub-light leg
      approachStep: 2,            // index into steps used for the last stretch before arrival (never faster than this near a body)
      approachDistanceRadii: 40,  // start slowing the clock inside this many body radii
    },
  },

  ship: {
    name: "ISV Meridian",
    maxSublightC: 0.8,            // speed limit inside a system (fraction of c)
    speedFloorKmS: 0.0005,        // slowest non-zero throttle setting (0.5 m/s)
    throttleDecadesPerSec: 0.9,   // W / S change the target speed by this many powers of ten per second
    engineResponseSec: 1.6,       // real seconds for the real speed to follow the throttle (e-folding time)
    // Two sub-light regimes. ORBITAL: speeds in km/s, engine limited to maneuverAccelMs2. CRUISE (trans-planetary): speeds in % of c, a spooling drive (engineResponseSec).
    orbitalMaxKmS: 100,           // below this speed (current and commanded) the orbital regime applies
    speedPresets: {
      orbital: [0.1, 0.5, 1, 3, 7.8, 11.2, 30, 60],                 // km/s   (7.8 = low-Earth-orbit speed, 11.2 = Earth escape, 30 = Earth's speed round the Sun)
      cruise: [0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 0.5, 0.8],       // × c    (0.1 % … 80 %)
    },
    maneuverAccelMs2: 1000,       // rocket acceleration used for orbit changes, orbit insertion and orbital-regime throttling (m/s²; 1000 ≈ 100 g torch drive)
    maxTurnDegPerSec: 22,         // fastest the flight computer slews the ship
    attitudeGain: 0.35,           // 1/s: turn rate commanded per radian of pointing error (low = long, gentle approach with no overshoot)
    attitudeLagSec: 0.6,          // turn rate itself is smoothed over this time: turns start and stop gently
    driveSpoolSec: 4.5,           // cruise drive: e-folding time for the speed to follow the slider (nacelles spooling up / down)
    gimbalMaxDeg: 6,              // the main engine tilts up to this far to make attitude corrections
    flipRateDegPerSec: 45,        // how fast the flight computer swings the ship tail-first to brake (and back again)
    turnRateDegPerSec: 38,        // yaw / pitch / roll rate from the keyboard
    steerSmoothing: 0.12,         // 0 = raw, 1 = very floaty
    lengthM: 74,                  // model size in metres (also sets chase-camera scale)
    safeOrbit: {
      // altitude above the surface = radius * (baseFraction + gravityLogFactor * ln(1 + g / g_earth)), at least minAltitudeKm
      baseFraction: 0.040,
      gravityLogFactor: 0.035,
      minAltitudeKm: 60,
      starMinRadii: 3.0,          // stars: never closer than this many stellar radii
    },
    orbitHold: { enabled: true, captureRadii: 4.0 },  // autopilot ends in a circular orbit at the safe radius
  },

  autopilot: {
    arrivalOrbitAltKm: 1000,      // default altitude of the orbit the autopilot inserts into on arrival (never below the safe orbit)
    brakeSeconds: 60,             // e-folding time of the braking law in the drive regime (higher = earlier, gentler slowing)
    flipLeadFactor: 4,            // the tail-first flip for the rocket braking starts this many (orbitalMaxKmS × brakeSeconds) before the rocket zone
    finalApproachK: 8,            // time compression cap for the final approach (rocket braking and insertion burn)
    approachRadii: 8,             // 'Approach' stops this many body radii from the centre (and holds position there)
    pathClearance: 1.6,           // the autopilot keeps its straight line this many safe-orbit radii away from every body it is not going to (it detours otherwise)
    cruiseFraction: 0.8,          // of the sub-light limit
    accelTimeSec: 18,             // sim seconds to reach cruise (before time compression is applied)
    brakeFactor: 1.0,             // 1 = brake as hard as accelerating
    continueToStar: true,         // after a warp arrival keep flying in toward the star
    turnSeconds: 5,               // real seconds to swing the nose onto the course
  },

  warp: {
    steps: [1, 10, 100, 1e3, 1e4, 1e5, 1e6],       // multiples of c, in powers of ten
    maxTimeCompression: 100,      // time compression is available while warping up to this factor (travel time shrinks with it; warp visuals do not change)
    secondsPerStep: 3.4,          // autopilot dwell on each step while ramping up (real s)
    rampSecPerDecade: 2.6,        // engage: real seconds to climb one power of ten
    decelSecPerDecade: 1.1,       // disengage: real seconds to shed one power of ten (rapid)
    bubbleStartC: 0.8,            // bubble begins forming as speed crosses this (c)
    bubbleFullC: 1.5,             // fully formed at this speed (c)
    arrivalMarginAu: 0.0,
    minEngageClearanceFraction: 1.0,   // must be this multiple of the heliopause radius from every star to engage
    visual: {
      aberrationScale: 1.0,       // 0 disables the star bunching entirely
      streakScale: 1.0,
      bubbleOpacity: 1.0,
      blueshiftScale: 1.0,
      lensStrength: 1.0,
      flashScale: 1.0,
      maxBeta: 0.94,              // apparent aberration speed at the top warp step (0.8 = no extra bunching)
      beaming: 0.45,              // brightness ~ Doppler^n for stars and sky while warping (physical: 2 for stars, 3 for diffuse light)
    },
  },

  heliopause: {
    // The Sun's measured value (Voyager 1, 2012). Others are scaled from stellar wind momentum flux.
    sunAu: 121,
    minAu: 6,
    maxAu: 40000,
    knownAu: {},                  // e.g. { "Alpha Centauri A": 90 } to override any star by its catalogue name
    windScale: { M: 5.0, K: 1.0, G: 1.0, F: 1.2, A: 0.05, B: 60, O: 400, giant: 4e3, supergiant: 1e5, whiteDwarf: 0.0005 },
    windSpeedKmS: { default: 400, hot: 1800, giant: 40 },
  },

  destinations: {
    radiusLy: 10,                 // systems closer than this to the ship are listed
    refreshSec: 0.7,
    groupAu: 6000,                // stars closer than this are one system (Alpha Cen A+B yes, Proxima no)
    maxListed: 60,
  },

  procgen: {
    // Systems of stars with no confirmed planets are generated deterministically from (sim.seed, star id). Always labelled FICTIONAL.
    enabled: true,
    frostLineAuAtSolarLum: 2.7,   // scales with sqrt(L)
    planetCount: { min: 1, max: 9 },
    mDwarfCompactProbability: 0.7,
    gasGiantChanceBeyondFrost: 0.55,
    iceGiantChance: 0.45,
    spacing: { periodRatioMin: 1.35, periodRatioMax: 2.4, hillSpacingMin: 12 },
    beltChance: 0.55,
    kuiperBeltChance: 0.5,
    moonsPerGiant: [0, 5],
    moonChanceTerrestrial: 0.3,
    ringChanceGiant: 0.18,
    eccentricitySigma: 0.06,
    inclinationSigmaDeg: 1.8,
    hzModel: "kopparapu2013",     // conservative habitable zone
  },

  /* A star's planets that are KNOWN (NASA Exoplanet Archive) use the archive values; missing numbers are estimated and marked "est." */
  knownPlanets: { fillMissing: true },

  tour: {
    // Each stop: fly to a body, dwell, move on. distance is in body radii of the final standoff; dwell in real seconds.
    // timeScale = time compression during the leg; legSeconds = how long the transfer takes on screen.
    stops: [
      { body: "earth",   distance: 5.5,  dwell: 26, legSeconds: 0,  timeScale: "orbit", note: "Earth and Moon" },
      { body: "moon",    distance: 5.0,  dwell: 16, legSeconds: 20, timeScale: "orbit", note: "Moon" },
      { body: "mars",    distance: 5.0,  dwell: 20, legSeconds: 38, timeScale: "orbit", note: "Mars" },
      { body: "jupiter", distance: 6.5,  dwell: 28, legSeconds: 44, timeScale: "orbit", note: "Jupiter" },
      { body: "io",      distance: 7.0,  dwell: 16, legSeconds: 22, timeScale: "orbit", note: "Io" },
      { body: "saturn",  distance: 5.2,  dwell: 32, legSeconds: 48, timeScale: "orbit", note: "Saturn" },
      { body: "titan",   distance: 6.0,  dwell: 14, legSeconds: 24, timeScale: "orbit", note: "Titan" },
      { body: "uranus",  distance: 6.0,  dwell: 18, legSeconds: 50, timeScale: "orbit", note: "Uranus" },
      { body: "neptune", distance: 6.0,  dwell: 20, legSeconds: 44, timeScale: "orbit", note: "Neptune" },
      { body: "pluto",   distance: 6.5,  dwell: 18, legSeconds: 40, timeScale: "orbit", note: "Pluto" },
    ],
    loop: true,
    defaultPace: "fast",          // "fast": time compression is automatic · "slow": you set it with the TIME buttons (choosing a TIME button during a fast tour switches it to slow; AUTO switches back)
    slowInitialStep: { system: 2, stars: 4 },   // index into time.steps a slow tour starts at (x100 for a system tour, x10 000 for the stars tour)
    slowDwellFactor: 2,           // slow tours linger this much longer at each stop
    slowWarpStep: 5,              // the stars tour warps no faster than this step (index into warp.steps) when slow: 100 000 c
    fastWarpK: 10,                // time compression while warping on a fast stars tour
    starsDwell: 30,               // stars tour: seconds spent at each system
    starsLegSeconds: 40,          // stars tour: wall-clock seconds for the flight from the system edge to its world
    orbitSeconds: 90,             // timeScale "orbit" picks a compression so one orbit of the stop takes about this long (a number sets it directly)
    cameraDriftDegPerSec: 1.6,    // slow orbit of the camera around the ship during the tour
  },

  camera: {
    fovDeg: 52,
    chaseDistanceLengths: 2.6,    // chase distance in ship lengths
    chaseHeightLengths: 0.55,
    hideShipBelowLengths: 0.45,   // first person: the ship model is hidden when the camera is closer than this (in ship lengths) so you do not see inside the hull
    minDistanceLengths: 0.0,      // 0 lets you zoom right into the ship (first-person) and look anywhere
    maxDistanceLengths: 20000,    // wheel zoom-out limit in ship lengths (20000 ≈ 1500 km: ship and the nearby planet in one view)
    orbitSensitivity: 0.0045,     // rad per pixel for left-drag orbit
    steerSensitivity: 0.0022,     // rad per pixel for right-drag (or Shift-drag) steering
    zoomSpeed: 1.12,
    smoothingSec: 0.12,           // camera ease time for orbit / zoom
    near: 0.0001,                 // km  (log depth makes this safe)
    far: 1e13,                    // km
  },

  visuals: {
    relativity: { skyGainCap: 3 },   // sub-light: the physical Doppler brightening of the diffuse sky (D³, 27× at 0.8 c) is limited to this factor so high speeds read as blue, not as a white-out
    intensity: 1.0,               // global multiplier on exposure of everything artificial (glows, effects)
    renderScale: 1.0,             // 1 = native; adaptive scaling may lower it
    maxPixelRatio: 1.5,           // caps the render resolution on retina screens (adaptive scaling lowers it further if the frame rate drops)
    adaptiveResolution: { enabled: true, targetFps: 58, min: 0.7 },
    antialias: 4,                 // MSAA samples on the HDR target (0/2/4/8)
    exposure: {
      compensationEv: 0.0,
      key: 0.9,                   // display level a sunlit white surface is exposed to (1 = clip)
      maxGain: 4e5,               // darkest-sky amplification relative to a sunlit white surface (4e5 shows the Milky Way like a long-exposure photo; 4e6 washed the whole sky out grey)
      minGain: 0.02,
      adaptSeconds: 1.3,
    },
    bloom: { strength: 0.065, radius: 1.0, levels: 6, inputCap: 14 },   // inputCap: brightest value (1 = sunlit white) that may feed the glow, so huge suns never swamp the frame
    tonemap: { saturation: 1.08, contrast: 1.0, filmGrain: 0.012, vignette: 0.18, chromaticAberration: 0.0007 },
    stars: {
      brightness: 1.0,
      magnitudeLimit: 10.2,       // fainter stars are not drawn
      minGain: 2.5e5,             // stars keep at least this exposure even in sunlit scenes (like a composite photo); 0 = purely physical, they vanish in daylight
      psfSigmaPx: 0.62,           // core width of the point-spread function
      haloStrength: 1.0,
      haloFraction: 0.0004,       // veiling-glare wing amplitude relative to the core peak
      haloWidthPx: 4.0,           // wing scale radius
      colorSaturation: 1.0,
      scintillation: 0.0,
    },
    milkyWay: { enabled: true, gain: 14.0, grain: 0.55, dustContrast: 1.0, detail: 1.0 },
    galaxies: { enabled: true, gain: 1.0, visibilityFloor: 0.014, labels: true },   // gain is relative to the Milky Way gain; floor = faintest smudge shown (0 = strictly physical: most dwarfs vanish)
    planets: { detailBump: 1.0, atmosphere: 1.0, clouds: 1.0, ringShadows: 1.0, nightLightGain: 1.6e-6, resolveMinPx: 0.7, resolveMaxPx: 2.4 },   // a body is a point of light below resolveMinPx and a full sphere above resolveMaxPx
    sun: { glare: 1.0 },
    ship: { shadows: true, engineGlow: 1.0, lights: true },
    belts: { gain: 40 },          // visibility boost for asteroid / debris belts (real ones are invisible to a camera; 0 hides them)
    orbitLines: { enabled: false, opacity: 0.16 },        // toggle with O
    labels: { enabled: true, maxLabels: 28 },
  },

  galaxyModel: {
    // Used to modulate the real Gaia light map when the ship is far from the Sun (kpc).
    sunRadiusKpc: 8.2, sunHeightPc: 20,
    diskScaleLengthKpc: 2.6, diskScaleHeightPc: 300, bulgeRadiusKpc: 0.7,
    dustScaleLengthKpc: 3.0, dustScaleHeightPc: 100,
    refreshDistancePc: 40,
  },

  ui: {
    showHud: true,
    units: "auto",               // "auto" | "km" | "au" | "ly"
    keyHints: true,
    settingsPanel: true,
  },
};
