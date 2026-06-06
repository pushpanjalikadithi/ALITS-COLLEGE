document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        form.reset();
    });

});
function topFunction(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});