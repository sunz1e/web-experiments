

document.addEventListener("DOMContentLoaded", function() {

  gsap.set(".cursor", {xPercent: -50, yPercent: -50});

  let xTo = gsap.quickTo(".cursor", "x", {duration: 0.3, ease: "elastic.out(1,1)"}),
      yTo = gsap.quickTo(".cursor", "y", {duration: 0.4, ease: "elastic.out(1,1)"});
  
  window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  var animating = false;

  let buz = document.getElementById("baz");
  
    buz.addEventListener("mouseover", function() {
      if(animating == false){
        animating = true;
        console.log("came inside the mouseover animation")
        gsap.to(".cursor", 0.2,{scale:0.5, backgroundColor: '#d87093'})
        gsap.to("#getBig", {visibility: 'hidden'})
        animating = false;
        // gsap.to("#baz", 0.2, {color: '#F4BBC9'})
        // gsap.to('body', { duration: 0.5, backgroundColor: '#F191AC'})
  
      }
      
      console.log("came OUT the mouseover animation")
    })

    buz.addEventListener("mouseleave", function() {
      if(animating == false){
        animating = true;
      gsap.to(".cursor", 0.2,{scale:1, backgroundColor: '#007794'})
      gsap.to("#getBig", {visibility: 'hidden'})
      gsap.to("#baz", 0.2, {color: '#007794'})
      gsap.to('body', { duration: 0.5, backgroundColor: '#72DDF7'})
      animating = false;
      }
    })

   
    

    buz.addEventListener("click", function() {


        if(animating == false){
          console.log("came inside the animation loop")
          animating = true;
          var tl = gsap.timeline({onComplete: function() {
            animating = false;
          }});
          tl.to("#getBig", 0.05, {opacity: 1, visibility: 'visible', color: '#d87093'})
          tl.to(".main-c", {visibility: 'hidden'})
          // tl.to("#getBig", {duration: 0.4, scale: 0.4,  ease: "power3"}, "-=0.5")
          tl.to("#getBig", {duration: 1.5, scale: 50,  ease: "power3"}, "-=0.5")
          tl.to("#getBig", {visibility: 'hidden'})            
          tl.to("#pink", {visibility: 'visible'}, "-=1")
          tl.to("#container", {visibility: 'collapse'})
   

          var tl2 = gsap.timeline({onComplete: function() {
            animating = false;
          }});
          tl2.from("#pinkinner", {duration: 2, y: '120vh',  ease: "power3"})
          tl2.to("#pinkinner", {scale: 2 ,ease: "power3"})
         
          console.log("going outside of the animation loop")
        }
        console.log("completed the animation loop")

    })


});