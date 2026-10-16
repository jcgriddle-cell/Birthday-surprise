
document.addEventListener("DOMContentLoaded", function () {

    // Back to the main invitation page
    const backButton = document.getElementById("backToStart");

    backButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    // Falling flower animation
    const flowerContainer = document.getElementById("flowerContainer");
    const flowers = ["✿", "❀", "✽", "❁"];

    function createFlower() {
        const flower = document.createElement("span");

        flower.classList.add("falling-flower");

        flower.textContent =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.left = Math.random() * 100 + "%";
        flower.style.fontSize = (14 + Math.random() * 18) + "px";
        flower.style.animationDuration = (6 + Math.random() * 5) + "s";

        flowerContainer.appendChild(flower);

        flower.addEventListener("animationend", function () {
            flower.remove();
        });
    }

    createFlower();
    setInterval(createFlower, 600);

});