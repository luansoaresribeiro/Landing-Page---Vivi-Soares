import * as THREE from "./vendor/three.module.js";

// Calm, ambient dotted-surface background for the "Escute a voz do coração"
// section only. Never a global background, never behind any other section.
(function () {
  "use strict";

  var canvas = document.getElementById("dotted-surface-canvas");
  if (!canvas) return;

  var stage = document.getElementById("voice-cinematic");
  var sticky = stage ? stage.querySelector(".voice-sticky") : null;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || typeof THREE === "undefined") {
    // Static, calm fallback: no WebGL, no motion, section stays fully readable.
    return;
  }

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  } catch (e) {
    return; // WebGL unavailable; section still reads fine without the effect.
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 5.2, 7.5);
  camera.lookAt(0, 0, 0);

  // A calm grid of points, gently undulating. Kept sparse and soft so it
  // reads as depth/atmosphere rather than a pattern that competes with text.
  var COLS = 64;
  var ROWS = 40;
  var SPACING = 0.22;
  var count = COLS * ROWS;
  var positions = new Float32Array(count * 3);
  var basePositions = new Float32Array(count * 3);

  var i = 0;
  for (var r = 0; r < ROWS; r++) {
    for (var c = 0; c < COLS; c++) {
      var x = (c - (COLS - 1) / 2) * SPACING;
      var z = (r - (ROWS - 1) / 2) * SPACING;
      positions[i * 3] = x;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = z;
      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = 0;
      basePositions[i * 3 + 2] = z;
      i++;
    }
  }

  var geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  var material = new THREE.PointsMaterial({
    color: new THREE.Color(0xc7a26a), // --gold
    size: 0.045,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
  });

  var points = new THREE.Points(geometry, material);
  scene.add(points);

  function resize() {
    var ref = sticky || canvas;
    var w = ref.clientWidth;
    var h = ref.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  var running = false;
  var rafId = null;
  var elapsedBeforePause = 0;
  var resumeTime = 0;

  function animate() {
    if (!running) return;
    var t = elapsedBeforePause + (performance.now() - resumeTime) / 1000;
    var pos = geometry.attributes.position;
    var arr = pos.array;
    for (var idx = 0; idx < count; idx++) {
      var bx = basePositions[idx * 3];
      var bz = basePositions[idx * 3 + 2];
      // Slow, low-amplitude waves. Two overlapping frequencies keep it from
      // looking mechanical without adding visual noise.
      arr[idx * 3 + 1] =
        Math.sin(bx * 0.6 + t * 0.35) * 0.16 +
        Math.cos(bz * 0.5 + t * 0.28) * 0.14;
    }
    pos.needsUpdate = true;
    renderer.render(scene, camera);
    rafId = requestAnimationFrame(animate);
  }

  function start() {
    if (running) return;
    running = true;
    resumeTime = performance.now();
    resize(); // layout is guaranteed settled by the time this section is actually visible
    rafId = requestAnimationFrame(animate);
  }
  function stop() {
    if (running) elapsedBeforePause += (performance.now() - resumeTime) / 1000;
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  // Only render while the section is actually visible, so this never
  // touches scroll performance for the rest of the page.
  if ("IntersectionObserver" in window && stage) {
    new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) start();
        else stop();
      },
      { threshold: 0.05 }
    ).observe(stage);
  } else {
    start();
  }

  window.addEventListener("beforeunload", function () {
    stop();
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  });
})();
