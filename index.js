// const reminderSelectElement = document.getElementById("userInput");
// let reminder = "farts";
// let reminderInput = reminderSelectElement.value;
// const reminderOutput = document.getElementById("new-reminder")
// const saveReminderInputElement = document.getElementById("reminder")

// function saveReminder(e) {
//   userInput = e.target.value;
// }

// saveReminderInputElement.addEventListener("change", saveReminder);
let reminder = "";
const newReminder = document.getElementById(".userInput")
const newReminder = document.getElementById(".userInput")
const newReminder = document.getElementById(".userInput")


function saveNewReminder(e) {
    reminder = e.target.value;
    console.log(saveNewReminder)
}

newReminder.addEventListener("change", saveNewReminder)

