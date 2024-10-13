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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
      templeName: "Abidjan Ivory Coast",
      location: "Abidjan, Cote d'lvoire",
      dedicated: "To be Dedicated",
      area: 23958,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-1108-main.jpg"
    },
    {
      templeName: "Accra Ghana",
      location: "Accra Ghana",
      dedicated: "2004, January, 11",
      area: 261360,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg South, Africa",
      dedicated: "1985, August, 24-25",
      area: 43560,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
    },
];

showAllTemples()

function displayTemples(temples) {
const templeElement = document.querySelector('.container');
templeElement.innerHTML = ''; // Clear previous results

// Loop through the temples array and create HTML for each temple card
temples.forEach((temple) => {
// Create the card element
const card = document.createElement('div');
card.className = 'temple-card';

// Add temple name
const name = document.createElement('h3');
name.textContent = temple.templeName;
  card.appendChild(name);

  // Add location
  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;
  card.appendChild(location);

  // Add dedication date
  const dedicationDate = document.createElement('p');
  dedicationDate.textContent = `Dedicated: ${temple.dedicated}`;
  card.appendChild(dedicationDate);

  // Add area
  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area} sq ft`;
  card.appendChild(area);

  // Add temple image
  const image = document.createElement('img');
  image.src = temple.imageUrl;
  image.alt = `Image of ${temple.templeName}`;
  image.loading = 'lazy'; // Native lazy loading
  card.appendChild(image);

  // Append the card to the container
  templeElement.appendChild(card);
});
}

// Filter functions
function showOldTemples() {
  const oldTemples = temples.filter(temple => {
    const [year] = temple.dedicated.split(', ');
    return !isNaN(year) && parseInt(year) < 1900;
  });
  displayTemples(oldTemples);
}

function showNewTemples() {
  const newTemples = temples.filter(temple => {
    const [year] = temple.dedicated.split(', ');
    return !isNaN(year) && parseInt(year) > 2000;
  });
  displayTemples(newTemples);
}

function showLargeTemples() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
}

function showSmallTemples() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
}

function showAllTemples() {
  displayTemples(temples);
}

// Example event listeners for navigation buttons
document.querySelector('#old').addEventListener('click', showOldTemples);
document.querySelector('#new').addEventListener('click', showNewTemples);
document.querySelector('#large').addEventListener('click', showLargeTemples);
document.querySelector('#small').addEventListener('click', showSmallTemples);
document.querySelector('#home').addEventListener('click', showAllTemples);