// TO DO
document.addEventListener("DOMContentLoaded", () => {
  const toDoItemBox = document.querySelector("ul");
  const taskInput = document.querySelector("#input");
  const addBtn = document.querySelector("#addBtn");
  const deleteBtn = document.querySelector("ul span");

  toDoItemBox.addEventListener("click", (e) => {
    // Task 1
    if (
      e.target &&
      e.target.nodeName === "LI" &&
      e.target.className === "checked"
    ) {
      e.target.classList.remove("checked");
    } else {
      e.target.classList.add("checked");
    }

    // Task 2
    if (e.target && e.target.nodeName === "SPAN") {
      e.target.parentElement.remove();
    }
  });

  // Task 3

  addBtn.addEventListener("click", (e) => {
    let inputValue = taskInput.value;
    const newItem = document.createElement("li");
    const newDeletebtn = deleteBtn.cloneNode();

    newItem.innerText = inputValue;
    newDeletebtn.innerText = "x";
    newItem.appendChild(newDeletebtn);
    toDoItemBox.insertAdjacentElement("afterbegin", newItem);
    // 把input的值消掉
    taskInput.value = "";
  });
});
