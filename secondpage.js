
document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("backToWelcomeButton");
    const nextButton = document.getElementById("aboutNextButton");
    const invitation = document.getElementById("invitation");

    // Back to Page 1
    backButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    // Next to Page 3 with animation
    nextButton.addEventListener("click", function () {
        nextButton.disabled = true;
        invitation.classList.add("page-leaving");

        setTimeout(function () {
            window.location.href = "thirdpage.html";
        }, 700);
    });
});
