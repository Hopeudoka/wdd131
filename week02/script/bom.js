const input = document.querySelector("#favchap");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value.trim() !== '') {
        listItem = document.createElement("li");
        deleteBtn = document.createElement("button");

        listItem.textContent = input.value;
        deleteBtn.textContent = "❌";

        listItem.append(deleteBtn);
        list.append(listItem);
        input.value = "";
        input.focus();

        deleteBtn.addEventListener("click", function () {
            list.removeChild(listItem);
            input.focus();
        });
    } else {
        alert("Input field is empty")
        input.focus();
    }
});

// deleteBtn.addEventListener("click", function () {
//     list.removeChild(li);
//     input.focus();
// });

input.value = "";
input.focus();