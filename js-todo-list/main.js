// TO DO
document.addEventListener("DOMContentLoaded", () => {
  const toDoItemBox = document.querySelector("ul");
  const taskInput = document.querySelector("#input");
  const addBtn = document.querySelector("#addBtn");
  const deleteBtn = document.querySelector("ul span");

  // 宣告一個變數當作要存入localStorage的值，如果存在就用它，undefined就給他一個空陣列;
  let itemStorageObject = JSON.parse(localStorage.getItem("itemlist")) || [];

  // 把LocalStorage的資料長出來給使用者
  if (itemStorageObject.length !== 0) {
    for (var i = 0; i < itemStorageObject.length; i++) {
      const newItem = document.createElement("li");
      const newDeletebtn = deleteBtn.cloneNode();
      newItem.innerText = itemStorageObject[i].content;
      newItem.dataset.id = itemStorageObject[i].id;
      if (itemStorageObject[i].status === true) {
        newItem.className = "checked";
      }
      newDeletebtn.innerText = "x";
      newItem.appendChild(newDeletebtn);
      toDoItemBox.insertAdjacentElement("afterbegin", newItem);
    }
  }

  toDoItemBox.addEventListener("click", (e) => {
    let itemStorageObject = JSON.parse(localStorage.getItem("itemlist"));

    // Task 1
    if (
      e.target &&
      e.target.nodeName === "LI" &&
      e.target.className === "checked"
    ) {
      e.target.classList.remove("checked");
      let id = e.target.dataset.id;
      itemStorageObject.forEach((data) => {
        if (data.id == id) {
          return (data.status = !data.status);
        }
      });
      localStorage.setItem("itemlist", JSON.stringify(itemStorageObject));
    } else {
      e.target.classList.add("checked");
      let id = e.target.dataset.id;
      itemStorageObject.forEach((data) => {
        if (data.id == id) {
          return (data.status = !data.status);
        }
      });
      localStorage.setItem("itemlist", JSON.stringify(itemStorageObject));
    }

    // Task 2
    if (e.target && e.target.nodeName === "SPAN") {
      let id = e.target.parentElement.dataset.id;
      e.target.parentElement.remove();

      const newDataAfterDelete = itemStorageObject.filter(
        (e) => e.id.toString() !== id
      );
      localStorage.setItem("itemlist", JSON.stringify(newDataAfterDelete));
    }
  });

  // Task 3

  addBtn.addEventListener("click", (e) => {
    // 先創立一個localStorage
    localStorage.setItem("itemlist", []);

    let inputValue = taskInput.value;
    const newItem = document.createElement("li");
    const newDeletebtn = deleteBtn.cloneNode();
    const identifier = Date.now();
    newItem.dataset.aaa = identifier;

    if (inputValue === "") return alert("Please input something at least!");

    // 把input加入要存入storage的陣列, 並且更新localStorage的值
    itemStorageObject.push({
      id: identifier,
      status: false,
      content: inputValue,
    });
    localStorage.setItem("itemlist", JSON.stringify(itemStorageObject));
    // ({check: true, content: "aasdasd", id: 4}, {}, {}, {}}
    // {date: new Date(), status: "unchecked",content: inputValue}

    newItem.innerText = inputValue;
    newDeletebtn.innerText = "x";
    newItem.appendChild(newDeletebtn);
    toDoItemBox.insertAdjacentElement("afterbegin", newItem);
    // 把input的值消掉
    taskInput.value = "";
  });
});
