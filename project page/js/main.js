gsap.from("#hero-section", {opacity: 0, x: -300, y: -500, duration: 2, ease: "power3"})
gsap.from("#content-section", {opacity: 0, x: 300,y: 500, duration: 2, ease: "power3"})
var heroSection = document.querySelector("#hero-section")
console.log(heroSection)
gsap.set(heroSection, {top: 0, left: 0, position: 'fixed', ease: "power3"})
console.log(heroSection.offsetWidth + 5)
gsap.set(document.querySelector("#content-section"), {marginLeft: heroSection.offsetWidth + 5 })

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}



// document.addEventListener("mousewheel", (e) => {

//     var heroSection = document.querySelector("#hero-section")
//     console.log(heroSection)
//     gsap.set(heroSection, {top: 0, left: 0, position: 'fixed', ease: "power3"})
//     console.log(heroSection.offsetWidth + 5)
//     gsap.set(document.querySelector("#content-section"), {marginLeft: heroSection.offsetWidth + 5 })
// }

// )