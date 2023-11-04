

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
      gsap.to(".cursor", 0.2,{scale:2, opacity:0.5, backgroundColor: '#F191AC'})
      gsap.to("#getBig", {opacity: 0})
      // gsap.to("#baz", 0.2, {color: '#F4BBC9'})
      // gsap.to('body', { duration: 0.5, backgroundColor: '#F191AC'})
    })

    buz.addEventListener("mouseleave", function() {
      gsap.to(".cursor", 0.2,{scale:1, opacity:1, backgroundColor: '#007794'})
      gsap.to("#getBig", {opacity: 0})
      gsap.to("#baz", 0.2, {color: '#007794'})
      gsap.to('body', { duration: 0.5, backgroundColor: '#72DDF7'})
    })

    buz.addEventListener("click", function() {
            gsap.to(".cursor", {opacity: 0})
            gsap.to("#getBig", 1, {opacity: 1})
            gsap.to("#getBig", 1, {color: '#F191AC'})
            gsap.to("#getBig", 1, {width: '100%', height: '100%',  ease: "Linear.easeNone", delay: 1 })
            // gsap.to("#container", 2, {display: 'none',  ease: "power4.inOut", delay: 1 })
            // gsap.to("#pink", 2, {display: 'flex',  ease: "power4.inOut", delay: 1 })
    })


});