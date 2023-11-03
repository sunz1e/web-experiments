

document.addEventListener("DOMContentLoaded", function() {
    gsap.set(".cursor", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".cursor", "x", {duration: 0.6, ease: "power4"}),
    yTo = gsap.quickTo(".cursor", "y", {duration: 0.6, ease: "power4"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
});

});