// TO DO
document.addEventListener("DOMContentLoaded", () => {
  const toDoItem = document.querySelectorAll("li");
  const toDoItemBox = document.querySelector("ul");

  // Task 1
  toDoItemBox.addEventListener("click", (e) => {
    if (
      e.target &&
      e.target.nodeName === "LI" &&
      e.target.className === "checked"
    ) {
      e.target.classList.remove("checked");
    } else {
      e.target.classList.add("checked");
    }
  });
});
