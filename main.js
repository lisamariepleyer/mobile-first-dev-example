import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const tellMeMoreButton = document.getElementById('tellMeMoreButton');
    const tellMeMoreParagraph = document.getElementById("tellMeMoreParagraph");

    tellMeMoreButton.addEventListener('click', () => {
        if (tellMeMoreParagraph.style.display === "none") {
            tellMeMoreParagraph.style.display = "block";
        } else {
            tellMeMoreParagraph.style.display = "none";
        }
    });
});
