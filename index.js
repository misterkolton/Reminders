
var ul = document.getElementById("dynamic-list");
var newReminder = document.getElementById("newReminder");

function addItem(){
    var li = document.createElement("li");
    li.setAttribute('id',newReminder.value);
    li.appendChild(document.createTextNode(newReminder.value));
    ul.appendChild(li);
    document.getElementById("newReminder").value='';
}

function removeItem(){    
    var item = document.getElementById(newReminder.value);
    
    ul.removeChild(item);
}