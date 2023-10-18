console.log("Code work ");
var tl = gsap.timeline({paused:true})
var tl2 = gsap.timeline({paused:true})
var tl3 = gsap.timeline({paused:true})
var tl4 = gsap.timeline({paused:true})
var tl5 = gsap.timeline({ paused: true })
var tl6 = gsap.timeline({ paused: true })
var tl7 = gsap.timeline({ paused: true })
var tl8 = gsap.timeline({ paused: true })
var tl9 = gsap.timeline({ paused: true })
//variables


const circleone = document.querySelector('.circle-one')
const circletwo = document.querySelector('.circle-two')
const circlethree = document.querySelector('.circle-three')
const circlefour = document.querySelector('.circle-four')
const circlefive = document.querySelector('.circle-five');
const circlesix = document.querySelector('.circle-six');
const circleseven = document.querySelector('.circle-seven');
const circleeight = document.querySelector('.circle-eight');
const circlenine = document.querySelector('.circle-nine');
const circleten = document.querySelector('.circle-ten');
const circleeleven = document.querySelector('.circle-eleven');
const circletwelve = document.querySelector('.circle-twelve');
const circlethirteen = document.querySelector('.circle-thirteen');
const plane1 = document.querySelector('.plane-one')
const plane2 = document.querySelector('.plane-two')
const plane3 = document.querySelector('.plane-three')
const plane4 = document.querySelector('.plane-four')
const plane5 = document.querySelector('.plane-five');
const plane6 = document.querySelector('.plane-six');
const plane7 = document.querySelector('.plane-seven');
const plane8 = document.querySelector('.plane-eight');
const plane9 = document.querySelector('.plane-nine');
const plane10 = document.querySelector('.plane-ten');
const plane11 = document.querySelector('.plane-eleven');
const plane12 = document.querySelector('.plane-twelve');
// const plane13 = document.querySelector('.plane-thirteen');
    

//tmeline 1
tl.to(circletwo, {
clipPath: 'circle(96% at 50% 75%)',
webkitClipPath: 'circle(96% at 50% 75%)',
duration: 1,
ease: Power1.easeInOut
});
tl.to(circleone, {
clipPath: 'circle(2rem at 50% 75%)',
webkitClipPath: 'circle(2rem at 50% 75%)',
duration: 0
});
//timeline2
tl2.to(circlethree, {
clipPath: 'circle(96% at 50% 75%)',
webkitClipPath: 'circle(96% at 50% 75%)',
duration: 1,
ease: Power1.easeInOut
});
tl2.to(circletwo, {
clipPath: 'circle(2rem at 50% 75%)',
webkitClipPath: 'circle(2rem at 50% 75%)',
duration: 0
});
//timeline 3
tl3.to(circlethree, {
clipPath: 'circle(96% at 50% 75%)',
webkitClipPath: 'circle(96% at 50% 75%)',
duration: 1,
ease: Power1.easeInOut
});
tl3.to(circlefour, {
clipPath: 'circle(2rem at 50% 75%)',
webkitClipPath: 'circle(2rem at 50% 75%)',
duration: 0
});
tl2.to(circlefour, {
clipPath: 'circle(96% at 50% 75%)',
webkitClipPath: 'circle(96% at 50% 75%)',
duration: 0,
ease: Power1.easeInOut
});
tl2.to(circletwo, {
clipPath: 'circle(2rem at 50% 75%)',
webkitClipPath: 'circle(2rem at 50% 75%)',
duration: 0
});
tl5.to(circlefive, {
display: 'block',
duration: 0
});
tl5.to(circlefive, {
clipPath: 'circle(96% at 50% 75%)',
webkitClipPath: 'circle(96% at 50% 75%)',
duration: 1,
ease: Power1.easeInOut
});
tl5.to(circlefour, {
clipPath: 'circle(2rem at 50% 75%)',
webkitClipPath: 'circle(2rem at 50% 75%)',
duration: 0
});
tl6.to(circlesix, {
display: 'block',
duration: 0
});
tl6.to(circlesix, {
clipPath: 'circle(96% at 50% 75%)',
webkitClipPath: 'circle(96% at 50% 75%)',
duration: 1,
ease: Power1.easeInOut
});
tl6.to(circleten, {
clipPath: 'circle(2rem at 50% 75%)',
webkitClipPath: 'circle(2rem at 50% 75%)',
duration: 0
});
tl7.to(circleseven, {
display: 'block',
duration: 0
});
tl7.to(circleseven, {
clipPath: 'circle(96% at 50% 75%)',
webkitClipPath: 'circle(96% at 50% 75%)',
duration: 1,
ease: Power1.easeInOut
});
tl7.to(circleten, {
clipPath: 'circle(2rem at 50% 75%)',
webkitClipPath: 'circle(2rem at 50% 75%)',
duration: 0
});tl8.to(circleeight, {
display: 'block',
duration: 0
});
tl8.to(circleeight, {
clipPath: 'circle(96% at 50% 75%)',
webkitClipPath: 'circle(96% at 50% 75%)',
duration: 1,
ease: Power1.easeInOut
});
tl8.to(circleseven, {
clipPath: 'circle(2rem at 50% 75%)',
webkitClipPath: 'circle(2rem at 50% 75%)',
duration: 0
});
tl9.to(circlenine, {
display: 'block',
duration: 0
});
tl9.to(circlenine, {
clipPath: 'circle(96% at 50% 75%)',
webkitClipPath: 'circle(96% at 50% 75%)',
duration: 1,
ease: Power1.easeInOut
});
tl9.to(circleseven, {
clipPath: 'circle(2rem at 50% 75%)',
webkitClipPath: 'circle(2rem at 50% 75%)',
duration: 0
});
var current_plane = 1;

plane1.addEventListener('click', ()=>{
    current_plane = 2;
    tl.restart()
}
)
//trigger2
plane2.addEventListener('click', ()=>{
    current_plane = 3;
    tl2.restart()
}
)
//trigger3
plane3.addEventListener('click', ()=>{
    current_plane = 4;
    tl3.restart();
}
)
//trigger4
plane4.addEventListener('click', ()=>{
    current_plane = 5;
    tl4.restart();
}
)
plane5.addEventListener('click', ()=>{
    current_plane = 6;
    tl5.restart();
})
  plane6.addEventListener('click', ()=>{
    current_plane = 7;
    tl6.restart();
})
   plane6.addEventListener('click', ()=>{
    current_plane = 8;
    tl7.restart();
})    
 plane7.addEventListener('click', ()=>{
    current_plane = 9;
    tl8.restart();
})   
 plane8.addEventListener('click', ()=>{
    current_plane = 10;
    tl9.restart();
})      
plane9.addEventListener('click', ()=>{
    current_plane = 11;
    t20.restart();
})   
 plane10.addEventListener('click', ()=>{
    current_plane = 12;
    t21.restart();
})  
plane11.addEventListener('click', ()=>{
    current_plane = 13;
    t22.restart();
})


//z-index
document.addEventListener('DOMContentLoaded', ()=>{
    // on plane-one click

    setInterval(function() {
        if (current_plane == 1) {
            current_plane = 2;
            $(".plane-one").click()
        } else if (current_plane == 2) {
            current_plane = 3;
            $(".plane-two").click()
        } else if (current_plane == 3) {
            current_plane = 4;
            $(".plane-three").click()
        } else if (current_plane == 4) {
            current_plane = 5;
            $(".plane-four").click()
        }else if (current_plane == 5) {
            current_plane = 6;
            $(".plane-five").click()
        }else if (current_plane == 6) {
            current_plane = 7;
            $(".plane-six").click()
        }else if (current_plane == 7) {
            current_plane = 8;
            $(".plane-seven").click()
        }else if (current_plane == 8) {
            current_plane = 9;
            $(".plane-eight").click()
        }else if (current_plane == 9) {
            current_plane = 10;
            $(".plane-nine").click()
        }
    }, 1000)
}
);
