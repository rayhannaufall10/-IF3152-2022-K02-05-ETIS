const ticketModule = require("../../../../object/Tiket/tiket");
const moment = require("moment");
const form = document.getElementById("form");
const continueButton = document.getElementById("continueButton");
// Set Variable for Modal element
let modalBG = document.getElementsByClassName("modal-background");
modalBG = modalBG[0];

document.getElementById("clearButton").addEventListener("click", () => {
  form.reset();
});

document.getElementById("continueButton").addEventListener("click", mengambil_id, false);

async function mengambil_id(e){
  e.preventDefault()
  var id_aktual = document.getElementById('id_ticket').value
  var id_data = await ticketModule.Ticket.getDataWithId(id_aktual)
  if (!id_data.length){
    console.log("Tidak ada data")
    form.reset();
  }
  else{
    var fp_data = id_data[0].fast_pass
    if (fp_data == 0){
      ticketModule.Ticket.setUpTicket(id_aktual)
      showDoneConfirm()
    }
    else{
      console.log("tiket sudah fast pass")
      showDoneConfirm()
    }
  }
}


function showDoneConfirm(){
  let modalDone = document.getElementsByClassName('modal-done')[0]
  const done = document.getElementsByClassName('done')[0]
  const loading =document.getElementsByClassName('loading')[0]
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