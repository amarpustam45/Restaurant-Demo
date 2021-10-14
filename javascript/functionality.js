const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav__link")
const navLinkItem = document.querySelectorAll(".nav__link-item") 

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open")
})