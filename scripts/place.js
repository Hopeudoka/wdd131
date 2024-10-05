const today = new Date();

const year = document.querySelector("#year");
year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastUpdate = document.querySelector("#lastModified")
lastUpdate.innerHTML = `Last Modification: ${document.lastModified}`;


const temperature = 10;
const wind = 5;
let windChillTemp = document.querySelector("#windChill")

function calculateWindChill(temperature, wind) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16);
}

if (temperature <= 10 && wind > 4.8) {
    const windChillFunc = calculateWindChill(temperature, wind);
    windChillTemp.innerHTML = `<span>${windChillFunc.toFixed(1)}&deg;C</span>`;
} else {
    windChillTemp.innerHTML = `<span>N/A</span>`;
}

