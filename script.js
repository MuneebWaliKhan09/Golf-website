
var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + 30 + "px";
    cursor.style.top = dets.y + "px";
    cursorBlur.style.left = dets.x - 200 + "px";
    cursorBlur.style.top = dets.y - 200 + "px";
})


let allh4 = document.querySelectorAll("#nav h4")

allh4.forEach((ele) => {
    ele.addEventListener('mouseenter', function () {
        cursor.style.border = "1px solid white",
            cursor.style.scale = 3,
            cursor.style.backgroundColor = "transparent"
    })
})

allh4.forEach((ele) => {
    ele.addEventListener('mouseleave', function () {
        cursor.style.border = "0px solid #95C11E",
            cursor.style.scale = 1,
            cursor.style.backgroundColor = "95C11E"
    })
})









gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,

    }

})


gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 1,
    }
})


gsap.from("#about-us img, #about-text", {
    y: 90,
    opacity: 0,
    duration: 0.9,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 40%",
        end: "top 58%",
        scrub: 2,

    }

})


gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 0.9,
    stagger:0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,

    }

})


gsap.from("#img1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#img1",
        scroller: "body",
        start: "top 45%",
        end: "top 47%",
        scrub: 4,  // slow down the speed

    }

})

gsap.from("#img2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#img1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,  // slow down the speed

    }

})


gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,  // slow down the speed

    }

})