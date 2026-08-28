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
