
document.addEventListener("DOMContentLoaded", function () {
    // IMAGE PREVIEW ELEMENTS
    const imagePreview = document.getElementById("imagePreview");
    const previewImage = document.getElementById("previewImage");
    const closePreview = document.getElementById("closePreview");

    // GALLERY PHOTOS
    const galleryPhotos = document.querySelectorAll(".photo-card img");

    // OPEN PHOTO PREVIEW
    galleryPhotos.forEach(function (photo) {
        photo.addEventListener("click", function () {
            if (!imagePreview || !previewImage) return;

            previewImage.src = photo.src;
            previewImage.alt = photo.alt;
            imagePreview.classList.add("show");
        });
    });

    // CLOSE PHOTO PREVIEW
    function hidePreview() {
        if (imagePreview) {
            imagePreview.classList.remove("show");
        }
    }

    if (closePreview) {
        closePreview.addEventListener("click", hidePreview);
    }

    // CLOSE WHEN CLICKING OUTSIDE THE PHOTO
    if (imagePreview) {
        imagePreview.addEventListener("click", function (event) {
            if (event.target === imagePreview) {
                hidePreview();
            }
        });
    }

    // CLOSE USING ESCAPE KEY
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            hidePreview();
        }
    });

    // FALLING FLOWERS ANIMATION
    const flowers = ["✿", "❀", "✽", "✾", "❁"];

    function createFallingFlower() {
        // Stop creating flowers while leaving the page
        if (document.body.classList.contains("leaving-page")) {
            return;
        }

        const flower = document.createElement("span");

        flower.classList.add("falling-flower");
        flower.textContent =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.fontSize = (16 + Math.random() * 18) + "px";
        flower.style.animationDuration = (6 + Math.random() * 6) + "s";

        document.body.appendChild(flower);

        flower.addEventListener("animationend", function () {
            flower.remove();
        });
    }

    // START FALLING FLOWERS
    createFallingFlower();
    setInterval(createFallingFlower, 450);

    // BACK BUTTON: RETURN TO PAGE 3
    const backButton = document.getElementById("backButton");

    if (backButton) {
        backButton.addEventListener("click", function () {
            window.location.href = "thirdpage.html";
        });
    }

    // NEXT BUTTON: ANIMATION TO THE LAST PAGE
    const nextButton = document.getElementById("nextButton");

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            // Prevent multiple clicks
            if (document.body.classList.contains("leaving-page")) {
                return;
            }

            nextButton.disabled = true;

            // Close the photo preview if it is open
            hidePreview();

            // Trigger the transition animation
            document.body.classList.add("leaving-page");

            // Open the last page after the animation
            setTimeout(function () {
                window.location.href = "last.html";
            }, 1000);
        });
    }

    console.log("Page 4 - Photo Gallery is ready.");
});
