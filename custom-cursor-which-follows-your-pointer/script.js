
document.addEventListener("DOMContentLoaded", function() {

    var text = document.getElementById("indextext")
    if(text != null){
        text.addEventListener("click",function(event) {
            event.preventDefault();
            gsap.set("#indexOverlay", { visibility: "visible", width: "10px", height: "10px" });
            gsap.to("#indexOverlay", {duration: 1, width: "100vw", height: "100vh", ease: "power3",  onComplete: () => {
                // Animation is complete, navigate to the other page
                 window.location.href = text.children[1].getAttribute('href')
                console.log("done")

            }}, )
        })      
    }
  
})