const times = document.getElementById("times");
const bars = document.getElementById("bars");
const container = document.querySelector(".container");
const navMenu  = document.querySelector(".nav-menu");
const corner = document.querySelector(".corner");

const className = "active";

times.addEventListener("click", () => {
    toogleActive();
});

bars.addEventListener("click", () => {
    toogleActive();
});

function toogleActive() {
    corner.classList.toggle(className);
    container.classList.toggle(className);
    navMenu.classList.toggle(className);
}