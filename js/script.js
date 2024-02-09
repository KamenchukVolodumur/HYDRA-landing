gsap.registerPlugin(ScrollTrigger);
gsap.from(".main__text", {
    x: -500,
    duration: 1.5,
    opacity: -1,
});

gsap.from(".img", {
    x: -400,
    duration: 1.5,
    opacity: -1,
});

gsap.from(".main__columns", {
    duration: 1,
    width: "5%",
})
gsap.from(".main__columns-item", {
    duration: 2.5,
    opacity: -1,
})
gsap.from(".vl", {
    duration: 2.5,
    opacity: -1,
})


gsap.registerPlugin(ScrollTrigger);
let hamburgerButton = document.querySelector(".hamburger-button");
let hamburger=document.querySelector(".hamburger");
let isActive = false;
hamburgerButton.addEventListener("click", (e) => {
    if (isActive == true) {
        gsap.to(".hamburger-button", {
            duration: 1,
            rotation: -180,

        });
        gsap.to(".hamburger", {
            duration: 1,
            x: -300,
        });
        isActive = false;
    } else {
        gsap.to(".hamburger-button", {
            duration: 1,
            rotation: 180,
        });
        gsap.to(".hamburger", {
            duration: 1,
            x: 0,
        });
        isActive = true;
    }
});






