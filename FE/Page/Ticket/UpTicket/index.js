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
  const tickets = ticketModule.Ticket.tickets
  modalBG.style.display = "flex";
  modalContainer.style.display = "flex";
  let modalContent = document.getElementsByClassName("modal-content");
  modalContent = modalContent[0]
  let j = 1
  // Date
  const month = data.date.format('MMM')
  const date = data.date.format('D')
  const year = data.date.format('YYYY')
  for (let i = data.lastId; i < data.lastId + data.quanitity; i++) {
    const templateHTML = `<div class="box-container">
    <label for="ticket-${j}">
      <div class="box-content">
        <div class="detail-ticket">
          <span class="id-ticket">T-${tickets[j-1].idTiket}</span>
          <span>${date} ${month} ${year}</span>
        </div>
      </div>
    </label>
    <input type="checkbox" id="ticket-${j}">
  </div>`
    modalContent.innerHTML += templateHTML;
    j++;
  }
  
}

// Close Modal when click outside modal container
window.onclick = function (e) {
  if (e.target == modalBG) {
    modalBG.style.display = "none";
    modalContainer.style.display = "none";
    resetFormValue()
  }
};

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
  let modalContent = document.getElementsByClassName("modal-content");
  modalContent = modalContent[0]
  modalContent.innerHTML = ""
  number.innerHTML = 1;
  ticketModule.Ticket.tickets = [];
  form.reset();
}

// Create object Ticket and push to tickets
async function createTickets(data) {
  const nomorTelp = data.nomorTelepon;
  const idTicket = data.lastId + 1;
  const quanitity = data.quanitity + idTicket;
  for (let i = idTicket; i < quanitity; i++) {
    let nTiket = new ticketModule.Ticket(i, nomorTelp, 0,data.date.format("YYYY-MM-DD HH:mm:ss"));
    ticketModule.Ticket.tickets.push(nTiket);
  }
  showModal(data);
}
document.getElementById('modal-button-confirm').addEventListener('click',function(){
  const quanitity = ticketModule.Ticket.tickets.length
  for(let i = 0 ; i < quanitity ; i++){
    const id = `ticket-${i+1}`
    const fp = document.getElementById(id).checked
    ticketModule.Ticket.tickets[i].fastPass = fp
    ticketModule.Ticket.tickets[i].insertData()
  }
  setLastId();
  showDoneConfirm()
})
function showDoneConfirm(){
  let modalDone = document.getElementsByClassName('modal-done')[0]
  let modalContainer = document.getElementsByClassName('modal-container')[0]
  const modalButton = document.getElementsByClassName('modal-confirm')[0]
  const done = document.getElementsByClassName('done')[0]
  const loading =document.getElementsByClassName('loading')[0]
  modalButton.style.display = "none"
  modalContainer.style.display ="none"
  modalDone.style.display="flex"
  setTimeout(() => {
    loading.style.display = "none"
    done.style.display = 'flex'
    // goBack()
    setTimeout(()=>{
      history.go(-2)
    },900)
    
  }, 2000);  
}