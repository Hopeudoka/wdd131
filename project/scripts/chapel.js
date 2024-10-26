const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span>`;

const lastUpdate = document.querySelector("#lastModified")
lastUpdate.innerHTML = `Last Modification: ${document.lastModified}`;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const topics = [
	{
		name: "The book of Mormon",
		id: 1
	},
	{
		name: "The plan of salvation",
		id: 2
	},
	{
		name: "The Restoration",
		id: 3
	},
	{
		name: "Prophets",
		id: 4
	},
	{
		name: "Ibiono Stake Center",
		id: 5
	},
];

if (document.querySelector(".tourform")) {
    const selectElement = document.querySelector("#topic");

    topics.forEach((topic)=> {
        let updateOption = document.createElement("option");

        updateOption.textContent = topic.name;
        updateOption.value = topic.id;

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