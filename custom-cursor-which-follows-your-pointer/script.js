
document.addEventListener("DOMContentLoaded", function() {
    gsap.set("#indexOverlay", { visibility: "visible", width: "10px", height: "10px" });

    var overlay = document.getElementById("indexOverlay")

    const divRect = overlay.getBoundingClientRect();

    // Calculate the spaces
    const spaceLeft = divRect.left;
    console.log(spaceLeft)

    const spaceRight = window.innerWidth - (divRect.left + divRect.width);
    console.log(spaceRight)

    const spaceTop = divRect.top;
    console.log(spaceTop)

    const spaceBottom = window.innerHeight - (divRect.top + divRect.height);
    console.log(spaceBottom)

    const horizontal = Math.max(spaceLeft, spaceRight);
    const vertical = Math.max(spaceBottom, spaceTop);

    console.log(horizontal)
    console.log(vertical)
    console.log(spaceLeft + spaceRight + divRect.width)
    console.log(spaceBottom+spaceTop +divRect.height)

    var text = document.getElementById("indextext")
    if(text != null){
        text.addEventListener("click",function(event) {
            event.preventDefault();
            text.children[1].children[0].textContent = ""

            console.log(text)

            var overlay = document.getElementById("indexOverlay")

            const divRect = overlay.getBoundingClientRect();

            // Calculate the spaces
            const spaceLeft = divRect.left;
            console.log(spaceLeft)

            const spaceRight = window.innerWidth - (divRect.left + divRect.width);
            console.log(spaceRight)

            const spaceTop = divRect.top;
            console.log(spaceTop)

            const spaceBottom = window.innerHeight - (divRect.top + divRect.height);
            console.log(spaceBottom)

            const horizontal = Math.max(spaceLeft, spaceRight);
            const vertical = Math.max(spaceBottom, spaceTop);

            console.log(horizontal)
            console.log(vertical)
            console.log(spaceLeft + spaceRight + divRect.width)
            console.log(spaceBottom+spaceTop +divRect.height)
            
            
            
 
            gsap.to("#indexOverlay", {duration: 1.5, width: (2 * horizontal + divRect.width) +"px", height: (2 * vertical + divRect.height) +"px", ease: "power3",  onComplete: () => {
                // Animation is complete, navigate to the other page
                 window.location.href = text.children[1].getAttribute('href')
                console.log("done")
                
            }}, )
            
        })      
    }
  
})