(function() {
    [...document.querySelectorAll(".control")].forEach(button => {
    button.addEventListener("click", function() {
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
    })
});

document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})
})();