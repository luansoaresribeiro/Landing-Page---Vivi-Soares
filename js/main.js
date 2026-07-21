(function () {
  "use strict";

  // Header border toggle, driven by IntersectionObserver against a sentinel
  // rather than a scroll listener (avoids per-frame scroll handling).
  var header = document.getElementById("site-header");
  if (header && "IntersectionObserver" in window) {
    var sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute; top:0; height:1px; width:1px;";
    document.body.prepend(sentinel);
    new IntersectionObserver(function (entries) {
      header.classList.toggle("scrolled", !entries[0].isIntersecting);
    }).observe(sentinel);
  }
})();
