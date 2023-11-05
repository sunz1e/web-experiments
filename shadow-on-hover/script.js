document.addEventListener("DOMContentLoaded", function() {

    var images = document.getElementsByClassName("skillImage");
    console.log(images)
    Array.from(images).forEach(function(element)  {
        element.addEventListener("mouseleave", function(e) {
            gsap.to(this, {
                x: 0,
                duration: 0.4,
                ease: "power3"
              });
          
              gsap.to(this, {
                y: 0,
                duration: 0.4,
                ease: "power3"
              });

        })


        element.addEventListener("mousemove", function(e) {
            const { clientX, clientY} = e;
            console.log(this)
            const {width, height, left, top} = element.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            const xTo = gsap.quickTo(this, "x", { duration: 0.4, ease: "power3" });
            const yTo = gsap.quickTo(this, "y", { duration: 0.4, ease: "power3" });

            gsap.to(this, {
                x: x,
                duration: 0.4,
                ease: "power3"
              });
          
              gsap.to(this, {
                y: y,
                duration: 0.4,
                ease: "power3"
              });

        })
    });    




})