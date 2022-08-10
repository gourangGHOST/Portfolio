/* reload to top */
window.onbeforeunload = function () {
  window.scrollTo({
    top: 0
  });
}

/* Hamburger animation */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".new-nav").forEach(n => n.addEventListener("click", () =>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


/* Magnifine image */
const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

/* reveal page animation */

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

 
/* My work filter animation */

let mixer = mixitup(".portfolio-gallery",{
    selectors: {
        target: '.prt-card'
    },
    animation: {
        duration: 500,
    }
});

/* Smooth scroll */

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

/* Modal pop up animation */

let currentIndex = 0;

zoom_icons.forEach((icn, i) => 
  icn.addEventListener("click", () => {
     prt_section.classList.add("open");
     document.body.classList.add("stopScrolling");
     currentIndex = i;
     changeImage(currentIndex);
  })
);

modal_overlay.addEventListener("click", () => {
  prt_section.classList.remove("open");
  document.body.classList.remove("stopScrolling");
});

prev_btn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = 5;
  } else {
    currentIndex--;
  }
  changeImage(currentIndex)

});

next_btn.addEventListener("click", () => {
  if (currentIndex === 5) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  changeImage(currentIndex)
});

function changeImage(index) {
  images.forEach(img => img.classList.remove("showImage"));
  images[index].classList.add("showImage"); 

}



/* linking email */
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".mail");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(name.value == "" || email.value == "" || msg.value == ""){
      emptyerror();
    } else{
      sendmail(name.value, email.value, msg.value);
      success();
    }
  })
}

validate();

function sendmail(name, mail, msg){
  emailjs.send("service_9yw7bhq","template_bwfci7m",{
    from_name: mail,
    to_name: name,
    message: msg,
    });
}

function emptyerror() {
  swal({
    title: "Oh no..",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Email sent successfully",
    text: "We try to reply in 24 hours",
    icon: "success",
  });
}