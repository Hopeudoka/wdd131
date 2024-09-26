const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const listItem = document.createElement("li");
const deleteBtn = document.createElement("button");

listItem.textContent = input.value;
deleteBtn.textContent = "❌";

listItem.append(deleteBtn);
list.append(listItem);