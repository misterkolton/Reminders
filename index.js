const ul = document.getElementById("reminder-list");
const reminderInput = document.getElementById("reminderInput");


function addItem(){
    const li = document.createElement("li");
    li.setAttribute('id',reminderInput.value);
    li.appendChild(document.createTextNode(reminderInput.value));
    ul.appendChild(li);
    document.getElementById("reminderInput").value = "";
}

function removeItem(){
//    const item = document.getElementById(reminderInput.value);
//     ul.removeChild(item);
const list = document.getElementById("reminder-list");   // Get the <ul> element with id="reminder-list"
list.removeChild(list.childNodes[0]);           // Remove <ul>'s first child node (index 0)
}

document.getElementById('reminderInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem()
    }
});