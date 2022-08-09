window.onbeforeunload = function () {
  window.scrollTo({
    top: 0
  });
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

document.querySelectorAll("nav-links").forEach(n => n.addEventListener("click", () =>{
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}))



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

 
/* My work animation */

let mixer = mixitup(".portfolio-gallery",{
    selectors: {
        target: '.prt-card'
    },
    animation: {
        duration: 500,
    }
});

function scrollToId(id) {
  const coords = getOffset(document.getElementById(id))
  console.log(coords)
  window.scrollTo({
    top: coords.top,
    behavior: 'smooth'
  })
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}