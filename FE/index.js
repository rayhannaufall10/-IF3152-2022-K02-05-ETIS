const electron = require('electron')
const ticketModule = require("../object/Tiket/tiket")
const ipc = electron.ipcRenderer
const btn = document.getElementById('mybtn')
btn.addEventListener('click', async ()=>{
    await ticketModule.Ticket.setLastIdTicket()
    
})
