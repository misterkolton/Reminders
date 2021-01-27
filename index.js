const ul = document.getElementById("reminder-list");
const reminderInput = document.getElementById("reminderInput");


function addItem(){
    const li = document.createElement("li");
    li.setAttribute('id',reminderInput.value);
    li.appendChild(document.createTextNode(reminderInput.value));
    ul.appendChild(li);
    
}

function removeItem(){
   const item = document.getElementById(reminderInput.value);
    ul.removeChild(item);
}

document.getElementById('reminderInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem()
    }
});