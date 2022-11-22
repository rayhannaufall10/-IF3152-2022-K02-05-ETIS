const electron = require('electron')
const ticketModule = require("../object/Tiket/tiket")
const ipc = electron.ipcRenderer
document.getElementById("mybtn").addEventListener("click", async () => {
  console.log(ticketModule.Ticket.lastIdTicket);
});

