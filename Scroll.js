gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(".firstCol",{x:-150},
{x:0,
duration:0.5,
scrollTrigger:{
    trigger:".firstCol",
    start:"top 30%",
    // end:"top 20% ",
    toggleActions:"restart reverse rrsume reset",
    // markers:true
}

})
gsap.fromTo(".secCol",{opacity:0,},
{opacity:1,
duration:2,
scrollTrigger:{
    trigger:".secCol",
    start:"top 25%",
    toggleActions:"restart reverse rrsume reset",
    // markers:true
}
})

