
const invitation = document.getElementById("invitation");
const enterButton = document.getElementById("enterButton");
const nextButton = document.getElementById("nextButton");
const petalField = document.getElementById("petalField");

// When the Enter button is clicked
enterButton.addEventListener("click", function () {
  invitation.classList.add("entered");
  makePetals();
});

// When the Next button is clicked
nextButton.addEventListener("click", function () {
  // Prevent repeated clicks
  nextButton.disabled = true;

  // Add the transition animation
  invitation.classList.add("leaving");

  // Create floating petals during the transition
  makePetals();

  // Open Page 2 after the animation
  setTimeout(function () {
    window.location.href = "secondpage.html";
  }, 1200);
});

// Create falling flower petals
function makePetals() {
  const petalSymbols = ["✿", "❀", "✾", "❁"];

  for (let i = 0; i < 34; i++) {
    const petal = document.createElement("span");

    petal.className = "petal";
    petal.textContent =
      petalSymbols[Math.floor(Math.random() * petalSymbols.length)];

    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDuration = 3 + Math.random() * 4 + "s";
    petal.style.animationDelay = Math.random() * 2 + "s";
    petal.style.fontSize = 14 + Math.random() * 20 + "px";

    petalField.appendChild(petal);

    // Remove the petal after its animation
    setTimeout(function () {
      petal.remove();
    }, 8000);
  }
}
