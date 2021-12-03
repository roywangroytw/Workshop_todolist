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
      newItem.innerText = itemStorageObject[i];
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
    } else {
      e.target.classList.add("checked");
    }

    // Task 2
    if (e.target && e.target.nodeName === "SPAN") {
      const removetarget = e.target.parentElement;
      removetarget.remove();
      const a = removetarget.innerText.slice(0, -1);

      const newDataAfterDelete = itemStorageObject.filter((e) => e !== a);
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

    if (inputValue === "") return alert("Please input something at least!");

    // 把input加入要存入storage的陣列, 並且更新localStorage的值
    itemStorageObject.push(inputValue);
    localStorage.setItem("itemlist", JSON.stringify(itemStorageObject));
    console.log(new Date());
    console.log({ date: new Date(), status: "unchecked", content: inputValue });
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
