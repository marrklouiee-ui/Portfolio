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
const profilePhoto = document.getElementById("profilePhoto");
const photoModal = document.getElementById("photoModal");
const closePhoto = document.querySelector(".close-photo");

profilePhoto.addEventListener("click", function () {
    photoModal.style.display = "flex";
});

closePhoto.addEventListener("click", function () {
    photoModal.style.display = "none";
});

photoModal.addEventListener("click", function (event) {
    if (event.target === photoModal) {
        photoModal.style.display = "none";
    }
});
