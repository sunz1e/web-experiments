function getScreenFactor() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
    if (viewportWidth < 600) {
      // Mobile screen
      return 2;
    } else if (viewportWidth < 1200) {
      // Normal screen
      return 3;
    } else {
      // Widescreen
      return 4;
    }
  }


var tl = gsap.timeline({repeat: -1, delay: 0.1})

tl.from(".loader", { x: "51vw", duration: getScreenFactor() / 2,
  
    stagger: function (index, target, list) {
        // your custom logic here. Return the delay from the start (not between each)
        return 0.3 - (0.05 * index);
    },
  ease: "power3"},);



  tl.to(".loader", { x: "-52vw", duration: getScreenFactor() / 2, stagger: function (index, target, list) {
    // your custom logic here. Return the delay from the start (not between each)
    return 0.3 - (0.05 * index) ;
  },
  ease: "power3",
  onComplete: function() {
      console.log("Animation complete");
  }});

