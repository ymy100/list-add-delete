const input = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.innerText = text;

    const delBtn = document.createElement("button");
    delBtn.innerText = "削除";

    delBtn.addEventListener("click", () => {
        list.removeChild(li);
    });

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
});