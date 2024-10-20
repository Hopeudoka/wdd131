const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastUpdate = document.querySelector("#lastModified")
lastUpdate.innerHTML = `Last Modification: ${document.lastModified}`;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];


if (document.querySelector(".reviewform")) {
    const selectElement = document.querySelector("#prodName");

    products.forEach((product)=> {
        let updateOption = document.createElement("option");

        updateOption.textContent = product.name;
        updateOption.value = product.id;

        selectElement.append(updateOption);

    });
} else {
    let visitCount = localStorage.getItem("pageVisitCount");

    if (visitCount === null) {
        visitCount = 0;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }

    localStorage.setItem("pageVisitCount", visitCount);
}

