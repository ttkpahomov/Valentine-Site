document.addEventListener("DOMContentLoaded", () => {

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const container = document.querySelector(".container");

    function moveButton() {
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();

        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "absolute";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }

    // PC
    noBtn.addEventListener("mouseenter", moveButton);

    // Phone
    noBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        moveButton();
    });

    yesBtn.addEventListener("click", () => {
        window.location.href = "love.html";
    });

});