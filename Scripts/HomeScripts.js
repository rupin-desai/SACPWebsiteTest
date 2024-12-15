var options = {
    strings: ["Abide Implement Achieve"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: false,
    showCursor: false
};
var typed = new Typed("#typed-output", options);

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle the 'show' class to display/hide the navigation
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
