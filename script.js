document.addEventListener("DOMContentLoaded", function () {
    let backToTopButton = document.getElementById("backToTop");

    // Show the button when scrolling down
    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    };

    // Scroll back to the top when the button is clicked
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
