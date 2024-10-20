const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


// const deleteBtn = document.createElement("button");
// const listItem = document.createElement("li");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener("click", function () {
    if (input.value.trim() !== '') {
           displayList(input.value);
           chaptersArray.push(input.value);
           setChapterList();
           input.value = "";
           input.focus();
    } else {
        alert("Input field is empty")
        input.focus();
    }
});

function displayList(item) {
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");

    listItem.textContent = item;
    deleteBtn.textContent = "❌";

    listItem.append(deleteBtn);
    list.append(listItem);

    deleteBtn.addEventListener("click", function () {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("bomList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("bomList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

// input.value = "";
// input.focus();

// let chaptersArray = getChapterList() || [];