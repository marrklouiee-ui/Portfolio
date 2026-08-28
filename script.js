// Wait until the page loads

document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio loaded successfully!");


    // Typing effect

    const text =
        "I'm a beginner programmer learning to build awesome things.";

    const typingElement =
        document.getElementById("typing-text");

    let index = 0;


    function typeText() {

        if (index < text.length) {

            typingElement.textContent +=
                text.charAt(index);

            index++;

            setTimeout(typeText, 50);

        }

    }


    typeText();

});


// Project button

function showProject(projectName) {

    alert(
        projectName +
        " will be available soon!"
    );

}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Swiping/scrolling down
        header.classList.add("hide");
    } else {
        // Swiping/scrolling up
        header.classList.remove("hide");
    }

    lastScrollY = window.scrollY;
});
