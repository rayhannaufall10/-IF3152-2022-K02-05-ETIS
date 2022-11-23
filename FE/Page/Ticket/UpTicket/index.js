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

async function mengambil_id(e){
  e.preventDefault()
  var id_aktual = document.getElementById('id_ticket').value
  var id_data = await ticketModule.Ticket.getDataWithId(id_aktual)
  
  if (!id_data.length){
    console.log("ppppp");
    var modal = document.getElementById("modalGaada");
    var btn = document.getElementById("continueButton");
    var span = document.getElementsByClassName("close1")[0];
    console.log("masuk");
    //form.reset();
  }
  else{
    var fp_data = id_data[0].fast_pass
    if (fp_data == 0){
      ticketModule.Ticket.setUpTicket(id_aktual)
      var modal = document.getElementById("modalBelum");
      var btn = document.getElementById("continueButton");
      var span = document.getElementsByClassName("close2")[0];
    }
    else{
      console.log("tiket sudah fast pass")
      var modal = document.getElementById("modalSudah");
      var btn = document.getElementById("continueButton");
      var span = document.getElementsByClassName("close3")[0];
    }
  }
  // When the user clicks the button, open the modal 
  console.log("kambing");
  console.log(btn);
  btn.onclick = function() {
    modal.style.display = "flex";
    console.log("kepencet")
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

document.getElementById("continueButton").addEventListener("click", mengambil_id, false);
//var modal = document.getElementById("modalGaada");
//var btn = document.getElementById("continueButton");
//var span = document.getElementsByClassName("close1")[0];
//btn.onclick = function() {
//  modal.style.display = "flex";
//  console.log("kepencet")
//}
//     // When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//  modal.style.display = "none";
//}
//     // When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//  if (event.target == modal) {
//    modal.style.display = "none";
//  }
//}

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