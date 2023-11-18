function getScreenFactor() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
    if (viewportWidth < 600) {
      // Mobile screen
      return 2;
    } else if (viewportWidth < 2000) {
      // Normal screen
      return 4;
    } else {
      // Widescreen
      return 5;
    }
  }


  var overlay = document.getElementsByClassName("loader")
  const divRect = overlay[3].getBoundingClientRect();
  const divRect1 = overlay[0].getBoundingClientRect();

console.log(overlay)
console.log(divRect.left)
console.log(divRect1.right)
var variance = divRect1.right - divRect.left

var tl = gsap.timeline({repeat: -1, delay: 0.1})

tl.from(".loader", { x: (53.5) + "vw", duration: getScreenFactor() / 2,
  
    stagger: function (index, target, list) {
        // your custom logic here. Return the delay from the start (not between each)
        return 0.3 - (0.05 * index);
    },
  ease: "power3"},);



  tl.to(".loader", { x: -1 * (50 + variance/9) + "vw", duration: getScreenFactor() / 2, stagger: 0.1,
  ease: "power3",
  onComplete: function() {
      console.log("Animation complete");
  }});

