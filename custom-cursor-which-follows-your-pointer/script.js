

document.addEventListener("DOMContentLoaded", function() {

  gsap.set(".cursor", {xPercent: -50, yPercent: -50});

  let xTo = gsap.quickTo(".cursor", "x", {duration: 0.3, ease: "elastic.out(1,1)"}),
      yTo = gsap.quickTo(".cursor", "y", {duration: 0.4, ease: "elastic.out(1,1)"});
  
  window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
  });


  let buz = document.getElementById("baz");
  
    buz.addEventListener("mouseover", function() {
      gsap.to(".cursor", 0.2,{scale:0.5, backgroundColor: '#F191AC'})
      gsap.to("#getBig", {visibility: 'hidden'})
      // gsap.to("#baz", 0.2, {color: '#F4BBC9'})
      // gsap.to('body', { duration: 0.5, backgroundColor: '#F191AC'})
    })

    buz.addEventListener("mouseleave", function() {
      gsap.to(".cursor", 0.2,{scale:1, backgroundColor: '#007794'})
      gsap.to("#getBig", {visibility: 'hidden'})
      gsap.to("#baz", 0.2, {color: '#007794'})
      gsap.to('body', { duration: 0.5, backgroundColor: '#72DDF7'})
    })

   


    buz.addEventListener("click", function() {

            var tl = gsap.timeline();
            tl.to("#getBig", 0.05, {opacity: 1, visibility: 'visible', color: '#F191AC'})
            tl.to(".main-c", {visibility: 'hidden'})
            // tl.to("#getBig", {duration: 0.4, scale: 0.4,  ease: "power3"}, "-=0.5")
            tl.to("#getBig", {duration: 1.5, scale: 50,  ease: "power3"}, "-=0.5")
            tl.to("#pink", {visibility: 'visible'}, "-=1")
            tl.to("#container", {visibility: 'collapse'})
            tl.to("#getBig", {visibility: 'hidden'})

            var tl2 = gsap.timeline();
            tl2.from("#pinkinner", {duration: 1.5, y: '120vh',  ease: "power3"})
            tl2.to("#pinkinner", {scale: 1.5 ,ease: "power3"}, "-=1")
    })


});