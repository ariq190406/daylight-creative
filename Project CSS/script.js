// ==========================
// NAVBAR ACTIVE
// ==========================

const sections = document.querySelectorAll("header[id], section[id]");
const navLinks = document.querySelectorAll("nav a");
const navbar = document.querySelector("nav");

function updatePage(){

    let current = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

    // Navbar berubah saat scroll
    if(window.scrollY > 60){
        navbar.classList.add("scroll");
    }else{
        navbar.classList.remove("scroll");
    }

    // Scroll Reveal
    document.querySelectorAll(".reveal").forEach(element=>{

        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if(revealTop < window.innerHeight - revealPoint){
            element.classList.add("active");
        }else{
            element.classList.remove("active");
        }

    });

}

window.addEventListener("scroll", updatePage);
window.addEventListener("load", updatePage);