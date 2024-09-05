"use strict";

let loader = document.querySelector(".loader");
let curs = document.getElementById("cursor");
let bottomnav = document.querySelector(".bottom-nav");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
let bottomnavcontent = document.querySelector(".bottom-nav-content-box");
let arrow = document.querySelector(".arrow");

function checkMediaQuery(query) {
  return window.matchMedia(query).matches;
}

if (checkMediaQuery("(max-width: 900px)")) {
  let project_container = document.querySelector(".project-card-container");
  let projcards = document.querySelectorAll(".project-card");
  project_container.classList.add("animateup");
  for (let i = 0; i < projcards.length; i++) {
    projcards[i].classList.remove("animateup");
  }
}

// function animate() {
//   let cards = document.getElementsByClassName("animateup");
//   let arr = Array.from(cards);
//   let selectNavTimeout;
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       let ele = entry.target;
//       if (entry.isIntersecting) {
//         console.log("in queue")
//         selectNavTimeout=
//         setTimeout(() => {
//           ele.classList.add("animate-visible");
//           observer.unobserve(entry.target);
//         }, 100);

//       }
//     });
//   });

//   arr.forEach((card) => {
//     observer.observe(card);
//   });

// }

function slide() {
  if (bottomnav.classList.contains("visible")) {
    bottomnavcontent.classList.toggle("bottom-nav-visible");
    menu.classList.toggle("menuinvisible");
    close.classList.toggle("menuinvisible");
    setTimeout(() => {
      bottomnav.classList.toggle("visible");
    }, 1000);
    return;
  }

  bottomnav.classList.toggle("visible");
  menu.classList.toggle("menuinvisible");
  close.classList.toggle("menuinvisible");
  bottomnavcontent.classList.toggle("bottom-nav-visible");
}

function scrollToEle(ele) {
  const element = document.getElementById(ele);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
}

document.addEventListener("mousemove", function (event) {
  curs.style.left = event.x + 20 + "px";
  curs.style.top = event.y + 20 + "px";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    arrow.style.opacity = "1";
  } else {
    arrow.style.opacity = "0";
  }
});

function typedAnimation() {
  let typed = new Typed(".text-animation", {
    strings: ["Web Developer", "App Developer"],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
  });
}

window.addEventListener("load", function () {
  // animate();
  typedAnimation();
  loader.classList.add("disappear");
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "i" || event.key === "I")) {
    event.preventDefault();
  }
});

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
