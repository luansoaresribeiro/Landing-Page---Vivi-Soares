(function () {
  "use strict";

  var field = document.getElementById("depoimentoField");
  if (!field) return;

  var cardEls = Array.prototype.slice.call(field.querySelectorAll(".float-card"));
  if (!cardEls.length) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var CARD_W_APPROX = 190; // matches the CSS clamp() midpoint, used only for scatter math
  var ROW_H_DESKTOP = 340;
  var ROW_H_MOBILE = 300;

  // Each card cycles through: "float" (ambient drift) -> "drag" (following the
  // pointer) -> "settle" (inertia glide after release) -> back to "float",
  // now drifting from wherever it was dropped instead of snapping home.
  var cards = cardEls.map(function (el, i) {
    return {
      el: el,
      phase: "float",
      baseX: 0, baseY: 0,
      x: 0, y: 0,
      ampX: reduceMotion ? 0 : 9 + Math.random() * 13,
      ampY: reduceMotion ? 0 : 9 + Math.random() * 13,
      freqX: 0.00016 + Math.random() * 0.00022,
      freqY: 0.00016 + Math.random() * 0.00022,
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      scale: 1,
      targetScale: 1,
      grabDX: 0, grabDY: 0,
      vx: 0, vy: 0,
      prevPX: 0, prevPY: 0
    };
  });

  function layout() {
    var width = field.clientWidth || 1000;
    var cols = width >= 1100 ? 4 : width >= 760 ? 3 : width >= 480 ? 2 : 1;
    var rows = Math.ceil(cards.length / cols);
    var rowH = width >= 760 ? ROW_H_DESKTOP : ROW_H_MOBILE;
    field.style.height = (rows * rowH + 24) + "px";

    var cellW = width / cols;
    cards.forEach(function (c, i) {
      var col = i % cols;
      var row = Math.floor(i / cols);
      var rowOffset = (row % 2 === 1) ? cellW * 0.28 : 0;
      var jitterX = (Math.random() - 0.5) * (cellW * 0.3);
      var jitterY = (Math.random() - 0.5) * 46;
      var bx = col * cellW + rowOffset + (cellW - CARD_W_APPROX) / 2 + jitterX;
      var by = row * rowH + jitterY + 12;
      bx = Math.max(6, Math.min(width - CARD_W_APPROX - 6, bx));
      if (c.phase === "float") {
        c.baseX = bx;
        c.baseY = by;
      }
    });
  }

  layout();
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 200);
  });

  function clampToField(c) {
    var maxX = field.clientWidth - c.el.offsetWidth - 4;
    var maxY = field.clientHeight - c.el.offsetHeight - 4;
    if (c.x < 4) { c.x = 4; c.vx = -c.vx * 0.3; }
    if (c.x > maxX) { c.x = maxX; c.vx = -c.vx * 0.3; }
    if (c.y < 4) { c.y = 4; c.vy = -c.vy * 0.3; }
    if (c.y > maxY) { c.y = maxY; c.vy = -c.vy * 0.3; }
  }

  function tick(t) {
    cards.forEach(function (c) {
      var x, y;
      if (c.phase === "drag") {
        clampToField(c);
        x = c.x;
        y = c.y;
      } else if (c.phase === "settle") {
        c.vx *= 0.92;
        c.vy *= 0.92;
        // cap inertia so a fast flick can't send the card far off its resting area
        c.vx = Math.max(-28, Math.min(28, c.vx));
        c.vy = Math.max(-28, Math.min(28, c.vy));
        c.x += c.vx;
        c.y += c.vy;
        clampToField(c);
        x = c.x;
        y = c.y;
        if (Math.abs(c.vx) < 0.12 && Math.abs(c.vy) < 0.12) {
          c.baseX = c.x;
          c.baseY = c.y;
          c.phase = "float";
          c.targetScale = 1;
          c.el.classList.remove("is-active");
        }
      } else {
        var hovering = c.el.classList.contains("is-active");
        if (hovering) {
          x = c.baseX;
          y = c.baseY;
        } else {
          x = c.baseX + Math.sin(t * c.freqX + c.phaseX) * c.ampX;
          y = c.baseY + Math.cos(t * c.freqY + c.phaseY) * c.ampY;
        }
      }
      c.scale += (c.targetScale - c.scale) * 0.18;
      c.el.style.transform =
        "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0) scale(" + c.scale.toFixed(3) + ")";
    });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  cards.forEach(function (c) {
    var el = c.el;

    el.addEventListener("pointerenter", function (e) {
      if (e.pointerType === "touch") return;
      if (c.phase === "drag") return;
      c.targetScale = 1.025;
      el.classList.add("is-active");
    });
    el.addEventListener("pointerleave", function () {
      if (c.phase === "drag") return;
      c.targetScale = 1;
      el.classList.remove("is-active");
    });

    el.addEventListener("pointerdown", function (e) {
      el.setPointerCapture(e.pointerId);
      var fieldRect = field.getBoundingClientRect();
      c.phase = "drag";
      c.targetScale = 1.035;
      el.classList.add("is-active", "is-dragging");
      c.x = c.baseX;
      c.y = c.baseY;
      c.grabDX = e.clientX - fieldRect.left - c.x;
      c.grabDY = e.clientY - fieldRect.top - c.y;
      c.prevPX = e.clientX;
      c.prevPY = e.clientY;
      c.vx = 0;
      c.vy = 0;
    });

    el.addEventListener("pointermove", function (e) {
      if (c.phase !== "drag") return;
      var fieldRect = field.getBoundingClientRect();
      var nx = e.clientX - fieldRect.left - c.grabDX;
      var ny = e.clientY - fieldRect.top - c.grabDY;
      c.vx = e.clientX - c.prevPX;
      c.vy = e.clientY - c.prevPY;
      c.prevPX = e.clientX;
      c.prevPY = e.clientY;
      c.x = nx;
      c.y = ny;
    });

    function release() {
      if (c.phase !== "drag") return;
      c.phase = "settle";
      el.classList.remove("is-dragging");
      c.targetScale = 1.015;
    }
    el.addEventListener("pointerup", release);
    el.addEventListener("pointercancel", release);
  });
})();
