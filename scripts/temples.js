// store the selected elements in variables.
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", function() {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});