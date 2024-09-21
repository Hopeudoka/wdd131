const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastUpdate = document.querySelector("#lastModified")

lastUpdate.innerHTML = `Last Modification: ${document.lastModified}`;