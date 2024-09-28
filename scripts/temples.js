const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastUpdate = document.querySelector("#lastModified")
lastUpdate.innerHTML = `Last Modification: ${document.lastModified}`;


// store the selected elements in variables.
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", function() {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});