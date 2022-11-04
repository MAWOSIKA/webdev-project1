const hamburger = document.querySelector(".mobile-nav");
const navMenu = document.querySelector('.main-nav');

hamburger.addEventListener("click",() => {
    // hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");
})

// document.querySelectorAll(".nav-link").forEach(n => n.
// addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))