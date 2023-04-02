// Can also be included with a regular script tag
// import Typed from 'typed.js';

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry)=>{
//         console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         }else{
//             entry.target.classList.remove('show');
//         }
//     })
// })

// const hiddenElement = document.querySelectorAll('.animation-section');

// hiddenElement.forEach((el)=> observer.observe(el));



var typed = new Typed('.text-animation', {
    strings: ["Web Developer", "Mobile Application Developer"],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
  });