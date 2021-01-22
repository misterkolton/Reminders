const billInputElement = document.getElementById("reminderInput");
const saveReminder = document.getElementById("saveReminder");
const reminderOutput = document.querySelector(".reminderOutput");
let reminder = "";

function saveBill(e) {
  reminder = e.target.value;
}

function getTotalBill() {
  const calculatedBill = reminder;
  reminderOutput.innerHTML = calculatedBill;
}

billInputElement.addEventListener("change", saveBill);
saveReminder.addEventListener("click", getTotalBill);
