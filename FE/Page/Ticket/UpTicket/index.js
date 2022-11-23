const ticketModule = require("../../../../object/Tiket/tiket");
const moment = require("moment");
const form = document.getElementById("form");
const continueButton = document.getElementById("continueButton");
// Set Variable for Modal element
let modalBG = document.getElementsByClassName("modal-background");
modalBG = modalBG[0];


async function mengambil_id(e){
  e.preventDefault()
  var id_aktual = document.getElementById('id_ticket').value
  var id_data = await ticketModule.Ticket.getDataWithId(id_aktual)
  
  if (!id_data.length){
    var modal = document.getElementById("modalGaada");
    var span = document.getElementsByClassName("closeGaada")[0];
    modal.style.display = "flex";
    //form.reset();
  }
  else{
    var fp_data = id_data[0].fast_pass
    if (fp_data == 0){
      ticketModule.Ticket.setUpTicket(id_aktual)
      var modal = document.getElementById("modalBelum");
      var span = document.getElementsByClassName("closeBelum")[0];
      modal.style.display = "flex";
    }
    else{
      console.log("tiket sudah fast pass")
      var modal = document.getElementById("modalSudah");
      var span = document.getElementsByClassName("closeSudah")[0];
      modal.style.display = "flex";
    }
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
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

document.getElementById("clearButton").addEventListener("click", () => {
  form.reset();
});

document.getElementById("continueButton").addEventListener("click", mengambil_id, false);