const ticketModule = require("../../../../object/Tiket/tiket");
const moment = require("moment");
const form = document.getElementById("form");
const continueButton = document.getElementById("continueButton");
// Set Variable for Modal element
let modalBG = document.getElementsByClassName("modal-background");
let modalContainer = document.getElementsByClassName("modal-container");
modalBG = modalBG[0];
modalContainer = modalContainer[0];
let newData = {
  nomorTelepon: 0,
  price: 10000,
  fastPass: 0,
  date: moment(),
  quanitity: 1,
  lastId: 1,
};
async function setLastId() {
  newData.lastId = await ticketModule.Ticket.setLastIdTicket();
}
setLastId();
// Configure modal

function showModal(data) {
  // Show Modal
  modalBG.style.display = "flex";
  modalContainer.style.display = "flex";
  let templateHTML = `<a href="">${data.nomorTelepon}
    </a>`;
  // const testE = document.getElementById("test");
  // for (let i = data.lastId; i < data.lastId + data.quanitity; i++) {
  //   testE.innerHTML += templateHTML;
  // }
  console.log(ticketModule.Ticket.tickets);
}

// Close Modal when click outside modal container
window.onclick = function (e) {
  if (e.target == modalBG) {
    modalBG.style.display = "none";
    modalContainer.style.display = "none";
  }
};
document.getElementById("modal-close").addEventListener("click", function () {
  resetFormValue();
  modalBG.style.display = "none";
  modalContainer.style.display = "none";
});
// Configure quantitiy-container
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let number = document.getElementById("number");

plus.addEventListener("click", (e) => {
  let val = parseInt(number.innerText);
  if (val == 5) return;
  number.innerText = ++val;
});

minus.addEventListener("click", (e) => {
  e.preventDefault();
  let val = parseInt(number.innerText);
  if (val == 1) return;
  number.innerText = --val;
});

// Continue from Form
function getDataForm(e) {
  e.preventDefault();
  let tmpData = new FormData(form);
  // const fp = document.getElementById("fast-pass").checked;
  newData.nomorTelepon = tmpData.get("nomor-telepon");
  if (!newData.nomorTelepon) {
    return;
  }
  // newData.fastPass = fp;
  let nTiket = new ticketModule.Ticket(newData.nomorTelepon, newData.fastPass);
  // Get quantitiy value
  let quanitity = parseInt(number.innerText);
  newData.quanitity = quanitity;
  newData.date = moment();
  createTickets(newData);
  // nTiket.insertData();
  // insertData(newData);
  form.reset();
}
continueButton.addEventListener("click", getDataForm, false);

document.getElementById("clearButton").addEventListener("click", () => {
  form.reset();
});

function resetFormValue() {
  number.innerHTML = 1;
  ticketModule.Ticket.tickets = [];
  form.reset();
}

// Create object Ticket and push to tickets
async function createTickets(data) {
  const nomorTelp = data.nomorTelepon;
  const idTicket = data.lastId + 1;
  const quanitity = data.quanitity + idTicket;
  // for (let i = idTicket; i < quanitity; i++) {
  //   let nTiket = new ticketModule.Ticket(i, nomorTelp, 0);
  //   ticketModule.Ticket.tickets.push(nTiket);
  // }
  showModal(data);
}

document.getElementById("mybtn").addEventListener("click", function () {
  console.log(newData.date.format("YYYY-MM-DD HH:mm:ss"));
});
