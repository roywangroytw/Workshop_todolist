// TO DO
document.addEventListener("DOMContentLoaded", () => {
  const toDoItem = document.querySelectorAll("li");
  const toDoItemBox = document.querySelector("ul");
  const deletebtn = document.querySelectorAll("close");

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
});
