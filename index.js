const billInputElement = document.getElementById("reminderInput");
const saveReminder = document.getElementById("saveReminder");
const reminderOutput = document.querySelector(".reminderOutput");
let reminder = "fuck ass";

function newReminder(e) {
  reminder = e.target.value;
}

function getReminder() {
  const displayReminder = reminder;
  reminderOutput.innerHTML = displayReminder;
  }

billInputElement.addEventListener("change", newReminder);
saveReminder.addEventListener("click", getReminder);
