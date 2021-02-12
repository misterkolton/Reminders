const ul = document.getElementById("reminder-list");
const reminderInput = document.getElementById("reminderInput");
const inputContainer = document.querySelector(".input-with-button");
const addButton = createButton(
  '<i class="fa fa-plus"></i>',
  "addButton",
  addDiv
);

inputContainer.appendChild(addButton);

document
  .getElementById("reminderInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addDiv();
    }
  });

function addDiv() {
  if (reminderInput.value.length === 0) {
    return;
  }
  // console.log(reminderInput.value.length);
  const newDiv = document.createElement("newDiv");
  newDiv.setAttribute("class", reminderInput.value);
  newDiv.appendChild(document.createTextNode(reminderInput.value));
  addDivToList(newDiv);

  const deleteButton = createButton(
    '<i class="fa fa-trash"></i>',
    "delete-button",
    removeItem
  );
  // deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
  // deleteButton.classList.add("delete-button");
  newDiv.appendChild(deleteButton);
  // deleteButton.addEventListener("click", removeItem);
}

function addDivToList(div) {
  ul.appendChild(div);
  document.getElementById("reminderInput").value = "";
}

function createButton(icon, className, callback) {
  const button = document.createElement("button");
  button.innerHTML = `${icon}`;
  button.classList.add(className);
  button.addEventListener("click", callback);
  return button;
}

function removeItem(event) {
  //    const item = document.getElementById(reminderInput.value);
  //     ul.removeChild(item);
  const list = document.getElementById("reminder-list"); // Get the <ul> element with id="reminder-list"
  const listToArray = Array.from(list.children);
  const elementIndex = listToArray.indexOf(event.target.parentNode);
  list.removeChild(list.childNodes[elementIndex]);
  

  // Remove <ul>'s first child node (index 0)
  // Remove <ul>'s first child node (index 0)
  // const completedButton = document.createElement('button');
}

// function addDiv(){
//     const li = document.createElement("li");
//     li.setAttribute('id',reminderInput.value);
//     li.appendChild(document.createElement(reminderInput.value));
//     ul.appendChild(li);
//     document.getElementById("reminderInput").value = "";
