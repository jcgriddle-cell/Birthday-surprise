
document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("eventBackButton");
    const nextButton = document.getElementById("eventNextButton");
    const invitation = document.querySelector(".invitation");

    // Back to Page 2
    backButton.addEventListener("click", function () {
        window.location.href = "secondpage.html";
    });

    // Next to Page 4 with zoom transition
    nextButton.addEventListener("click", function () {
        nextButton.disabled = true;
        invitation.classList.add("gallery-leaving");

        setTimeout(function () {
            window.location.href = "fourthpage.html";
        }, 700);
    });
});
