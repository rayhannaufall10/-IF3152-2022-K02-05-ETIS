const ticketModule = require("../../../../object/Tiket/tiket");
const moment = require("moment");
const form = document.getElementById("form");

// Mengambil Id Ticket dari input dan melakukan pengecekan pada database
async function mengambil_id(e){
  e.preventDefault()
  var id_aktual = document.getElementById('id_ticket').value
  var id_data = await ticketModule.Ticket.getDataWithId(id_aktual)
  
  // Id ticket yang diinput tidak terdapat pada database
  if (!id_data.length){
    var modal = document.getElementById("modalGaada");
    var span = document.getElementsByClassName("closeGaada")[0];
    modal.style.display = "flex";
    form.reset();
  }
  else{ 
    var fp_data = id_data[0].fast_pass
    // Id ticket belum fastpass
    if (fp_data == 0){
      ticketModule.Ticket.setUpTicket(id_aktual)
      var modal = document.getElementById("modalBelum");
      var span = document.getElementsByClassName("closeBelum")[0];
      modal.style.display = "flex";
      form.reset();
    }
    else{ // Id ticket sudah fastpass
      var modal = document.getElementById("modalSudah");
      var span = document.getElementsByClassName("closeSudah")[0];
      modal.style.display = "flex";
      form.reset();
    }
  }
  //close the modal, dengan klik X
  span.onclick = function() {
    modal.style.display = "none";
  }
  // close the modal, dengan klik diluar modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// Klik pada clear button
document.getElementById("clearButton").addEventListener("click", () => {
  form.reset();
});

// Klik pada continue button
document.getElementById("continueButton").addEventListener("click", mengambil_id, false);