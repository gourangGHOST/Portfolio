let timeline = gsap.timeline();

timeline.to(".image-wrap",{
  height: "550px",
  duration: 1.5,
  backgroundSize: "100%",
  ease: "power4.inOut"
}).to(
  ".image-wrap", {
    height: "250px",
    backgroundPosition: "50% 35%",
    duration: 1.3,
    y: "0%",
    ease: "power3.inOut",
  }, 1.5).from(".big-name", {
    y: getYDistance(".big-name"),
    duration: 1.3,
    ease: "power3.inOut",
  }, 1.5).from(".hide",{
    opacity: "0",
    duration: 1.3,
    ease: "power3.inOut",
  }, 1.5)

  function getYDistance(el){
    return window.innerHeight - document.querySelector(el).getBoundingClientRect().top
  }