
gsap.registerPlugin(ScrollSmoother)
gsap.registerPlugin(CustomEase)
gsap.registerPlugin(ScrollTrigger)
     const script = document.createElement('script');
     script.src = 'https://cdn.jsdelivr.net/gh/SakibSumon/GSAP-Functions@0.1.1/gsap-animation-functions.js';
     document.head.appendChild(script);
function siteAnim() {

     gsap.to('.hero-text-content', {
          opacity: 1,
          duration: .6,
          y:0,
          delay: .3,
          ease: CustomEase.create("custom", "M0,0 C0.43,0.56 0.51,1 1,1 "),
     })

     gsap.to('.hero-img-anim', {
          opacity: 1,
          duration: .6,
          stagger: .2,
               delay: .3,
          })

     gsap.to('.hr-line', {
          opacity: 1,
          duration: .3,
          delay: .6,
     })

     ScrollTrigger.batch(".sec-title-anim", {
          interval: 0.1, 
          start: "top 80%",
          // markers: true,
          onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: .6}),
     })


     // ScrollTrigger.batch(".staggering", {
     //     start: "top 90%",
     //      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: .12, duration: .3}),
     // })
     //******above function is being fetched from a cdn using the github cdn******* */
     //******this code is functioned to animate items in a staggerring way******* */

     gsap.to('.cat-img-anim',{
          scrollTrigger: {
               trigger: '.cat-img-anim',
               start: "top 80%",
               // marker: true,
          },
          opacity: 1
     })

     ScrollTrigger.batch(".cat-content-anim", {
          interval: 0.1, // time window (in seconds) for batching to occur.
          onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: .2, duration: .3}),
     })

}

siteAnim();