/*
  PSG Positional Interchange — Animated Tactical Diagram
  Draws on a <canvas> element with id="tactical-canvas"
*/

(function () {
  const canvas = document.getElementById("tactical-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const W = 700;
  const H = 960;
  canvas.width = W;
  canvas.height = H;

  const PITCH_GREEN = "#1a5c2a";
  const PITCH_LINE = "rgba(255,255,255,0.45)";
  const PITCH_LINE_W = 1.5;
  const PSG_BLUE = "#004170";
  const PSG_RED = "#e30613";
  const STATIC_COLOR = "#555";
  const ARROW_ATTACK = "rgba(255,255,255,0.5)";
  const ARROW_DEFEND = "rgba(255,80,80,0.45)";
  const PLAYER_R = 18;
  const FONT = "bold 11px Inter, sans-serif";
  const FONT_SM = "9px Inter, sans-serif";

  function roundedRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  const PAD = 30;
  const PW = W - PAD * 2;
  const PH = H - PAD * 2;
  const px = (pct) => PAD + PW * pct;
  const py = (pct) => PAD + PH * pct;

  // Phase keyframes: each player has positions across 4 phases
  // [x%, y%] on pitch (0,0)=top-left, (1,1)=bottom-right
  // Pitch is vertical: top = opponent goal, bottom = own goal

  const players = [
    {
      name: "Chevalier",
      static: true,
      phases: [[0.5, 0.97], [0.5, 0.97], [0.5, 0.97], [0.5, 0.97]]
    },
    {
      name: "Marquinhos",
      static: false,
      phases: [[0.35, 0.85], [0.35, 0.72], [0.33, 0.76], [0.15, 0.78]]
    },
    {
      name: "Pacho",
      static: false,
      phases: [[0.65, 0.85], [0.65, 0.72], [0.67, 0.76], [0.85, 0.78]]
    },
    {
      name: "N. Mendes",
      static: false,
      phases: [[0.08, 0.7], [0.12, 0.45], [0.25, 0.35], [0.08, 0.65]]
    },
    {
      name: "Hakimi",
      static: false,
      phases: [[0.92, 0.7], [0.85, 0.4], [0.78, 0.25], [0.92, 0.65]]
    },
    {
      name: "Vitinha",
      static: false,
      phases: [[0.38, 0.65], [0.5, 0.55], [0.3, 0.5], [0.45, 0.6]]
    },
    {
      name: "J. Neves",
      static: false,
      phases: [[0.62, 0.65], [0.4, 0.48], [0.55, 0.4], [0.58, 0.62]]
    },
    {
      name: "Z. Emery",
      static: false,
      phases: [[0.5, 0.5], [0.6, 0.35], [0.5, 0.25], [0.42, 0.52]]
    },
    {
      name: "Kvara",
      static: false,
      phases: [[0.15, 0.35], [0.3, 0.2], [0.45, 0.15], [0.2, 0.4]]
    },
    {
      name: "Doué",
      static: false,
      phases: [[0.85, 0.35], [0.7, 0.18], [0.55, 0.12], [0.75, 0.3]]
    },
    {
      name: "Dembélé",
      static: false,
      phases: [[0.5, 0.22], [0.35, 0.15], [0.65, 0.1], [0.5, 0.18]]
    }
  ];

  const PHASE_DURATION = 2500;
  const TOTAL_PHASES = 4;
  const TOTAL_CYCLE = PHASE_DURATION * TOTAL_PHASES;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function getPlayerPos(player, time) {
    const cycleTime = ((time % TOTAL_CYCLE) + TOTAL_CYCLE) % TOTAL_CYCLE;
    const phaseIndex = Math.floor(cycleTime / PHASE_DURATION);
    const phaseT = easeInOut((cycleTime % PHASE_DURATION) / PHASE_DURATION);
    const nextIndex = (phaseIndex + 1) % TOTAL_PHASES;
    const from = player.phases[phaseIndex];
    const to = player.phases[nextIndex];
    return [lerp(from[0], to[0], phaseT), lerp(from[1], to[1], phaseT)];
  }

  function drawPitch() {
    ctx.fillStyle = PITCH_GREEN;
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = PITCH_LINE;
    ctx.lineWidth = PITCH_LINE_W;

    // Outer boundary
    ctx.strokeRect(PAD, PAD, PW, PH);

    // Halfway line
    ctx.beginPath();
    ctx.moveTo(PAD, py(0.5));
    ctx.lineTo(PAD + PW, py(0.5));
    ctx.stroke();

    // Center circle
    ctx.beginPath();
    ctx.arc(px(0.5), py(0.5), 55, 0, Math.PI * 2);
    ctx.stroke();

    // Center dot
    ctx.fillStyle = PITCH_LINE;
    ctx.beginPath();
    ctx.arc(px(0.5), py(0.5), 3, 0, Math.PI * 2);
    ctx.fill();

    // Top penalty box
    const boxW = PW * 0.44;
    const boxH = PH * 0.12;
    ctx.strokeRect(px(0.5) - boxW / 2, PAD, boxW, boxH);

    // Top 6-yard box
    const smallW = PW * 0.2;
    const smallH = PH * 0.04;
    ctx.strokeRect(px(0.5) - smallW / 2, PAD, smallW, smallH);

    // Top penalty arc
    ctx.beginPath();
    ctx.arc(px(0.5), PAD + boxH, 35, 0, Math.PI);
    ctx.stroke();

    // Bottom penalty box
    ctx.strokeRect(px(0.5) - boxW / 2, PAD + PH - boxH, boxW, boxH);

    // Bottom 6-yard box
    ctx.strokeRect(px(0.5) - smallW / 2, PAD + PH - smallH, smallW, smallH);

    // Bottom penalty arc
    ctx.beginPath();
    ctx.arc(px(0.5), PAD + PH - boxH, 35, Math.PI, Math.PI * 2);
    ctx.stroke();

    // Corner arcs
    const cr = 12;
    [[PAD, PAD, 0, Math.PI / 2],
     [PAD + PW, PAD, Math.PI / 2, Math.PI],
     [PAD, PAD + PH, -Math.PI / 2, 0],
     [PAD + PW, PAD + PH, Math.PI, Math.PI * 1.5]
    ].forEach(([cx, cy, s, e]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, cr, s, e);
      ctx.stroke();
    });
  }

  function drawTrail(player, time) {
    if (player.static) return;
    const steps = 20;
    const trailLength = 600;
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const t = time - trailLength * (1 - i / steps);
      const [xp, yp] = getPlayerPos(player, t);
      const x = px(xp);
      const y = py(yp);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  function drawArrowhead(fromX, fromY, toX, toY, color) {
    const angle = Math.atan2(toY - fromY, toX - fromX);
    const len = 8;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - len * Math.cos(angle - 0.4), toY - len * Math.sin(angle - 0.4));
    ctx.lineTo(toX - len * Math.cos(angle + 0.4), toY - len * Math.sin(angle + 0.4));
    ctx.closePath();
    ctx.fill();
  }

  function drawMovementArrow(player, time) {
    if (player.static) return;
    const [xp, yp] = getPlayerPos(player, time);
    const futureTime = time + 300;
    const [fxp, fyp] = getPlayerPos(player, futureTime);
    const x1 = px(xp);
    const y1 = py(yp);
    const x2 = px(fxp);
    const y2 = py(fyp);
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 1) return;

    const isDefensive = dy > 2;
    const color = isDefensive ? ARROW_DEFEND : ARROW_ATTACK;
    const arrowLen = Math.min(dist * 2, 40);
    const nx = dx / dist;
    const ny = dy / dist;
    const ax = x1 + nx * (PLAYER_R + 4);
    const ay = y1 + ny * (PLAYER_R + 4);
    const bx = ax + nx * arrowLen;
    const by = ay + ny * arrowLen;

    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.stroke();
    ctx.setLineDash([]);
    drawArrowhead(ax, ay, bx, by, color);
  }

  function drawPlayer(player, time) {
    const [xp, yp] = getPlayerPos(player, time);
    const x = px(xp);
    const y = py(yp);

    // Glow for moving players
    if (!player.static) {
      const grad = ctx.createRadialGradient(x, y, PLAYER_R, x, y, PLAYER_R * 2.2);
      grad.addColorStop(0, "rgba(0,65,112,0.25)");
      grad.addColorStop(1, "rgba(0,65,112,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, PLAYER_R * 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Circle
    ctx.beginPath();
    ctx.arc(x, y, PLAYER_R, 0, Math.PI * 2);
    ctx.fillStyle = player.static ? STATIC_COLOR : PSG_BLUE;
    ctx.fill();
    ctx.strokeStyle = player.static ? "#777" : PSG_RED;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Name
    ctx.fillStyle = "#fff";
    ctx.font = FONT;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(player.name, x, y + PLAYER_R + 14);
  }

  function drawLegend() {
    const lx = 16;
    const ly = H - 70;

    ctx.fillStyle = "rgba(0,0,0,0.55)";
    roundedRect(lx, ly, 200, 56, 8);
    ctx.fill();

    ctx.font = FONT_SM;
    ctx.textAlign = "left";

    // Attack arrow
    ctx.strokeStyle = ARROW_ATTACK;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(lx + 12, ly + 18);
    ctx.lineTo(lx + 40, ly + 18);
    ctx.stroke();
    ctx.setLineDash([]);
    drawArrowhead(lx + 12, ly + 18, lx + 40, ly + 18, ARROW_ATTACK);
    ctx.fillStyle = "#ccc";
    ctx.fillText("Attacking rotation", lx + 48, ly + 21);

    // Defend arrow
    ctx.strokeStyle = ARROW_DEFEND;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(lx + 12, ly + 38);
    ctx.lineTo(lx + 40, ly + 38);
    ctx.stroke();
    ctx.setLineDash([]);
    drawArrowhead(lx + 12, ly + 38, lx + 40, ly + 38, ARROW_DEFEND);
    ctx.fillStyle = "#ccc";
    ctx.fillText("Defensive cover", lx + 48, ly + 41);
  }

  function drawPhaseLabel(time) {
    const cycleTime = time % TOTAL_CYCLE;
    const phaseIndex = Math.floor(cycleTime / PHASE_DURATION);
    const labels = [
      "Base Shape: 4-3-3",
      "Build-up: CBs Step Up, Fullbacks Push",
      "Final Third: Positions Dissolve",
      "Transition: CBs Cover for Fullbacks"
    ];

    ctx.fillStyle = "rgba(0,0,0,0.55)";
    roundedRect(W / 2 - 170, 8, 340, 30, 8);
    ctx.fill();

    ctx.fillStyle = "#fff";
    ctx.font = "bold 12px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(labels[phaseIndex], W / 2, 23);
  }

  let startTime = null;

  function frame(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    ctx.clearRect(0, 0, W, H);
    drawPitch();

    for (const p of players) drawTrail(p, elapsed);
    for (const p of players) drawMovementArrow(p, elapsed);
    for (const p of players) drawPlayer(p, elapsed);

    drawLegend();
    drawPhaseLabel(elapsed);

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();
