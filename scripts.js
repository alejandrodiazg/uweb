function updateNavbar() {
    var navbar = document.querySelector(".navbar");
    var topHeader = document.querySelector(".top-header");
    var heroSection = document.querySelector(".hero");
    var heroHeight = heroSection.offsetHeight;
    var scrollPosition = window.scrollY;


    var isMobile = window.innerWidth < 768;


    var triggerHeight = heroHeight * 0.10;

    if (isMobile) {
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-blue");
    } else {
        if (scrollPosition > triggerHeight) {
            navbar.classList.remove("navbar-light");
            navbar.classList.add("navbar-blue");
            topHeader.classList.add("top-header-black");
        } else {
            navbar.classList.add("navbar-light");
            navbar.classList.remove("navbar-blue");
            topHeader.classList.remove("top-header-black");
        }
    }
}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("resize", updateNavbar);
updateNavbar(); 