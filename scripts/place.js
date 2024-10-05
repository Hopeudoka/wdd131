const today = new Date();

const year = document.querySelector("#year");
year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastUpdate = document.querySelector("#lastModified")
lastUpdate.innerHTML = `Last Modification: ${document.lastModified}`;


const temperature = 10;
const wind = 5;