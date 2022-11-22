const tp = require("../../../../object/Transportation/transportation");

const tbody = document.querySelector('tbody');


function inserthtml(transportData){
        
    for(let i = 0; i < transportData.length; i++){
    const html = `
        <tr>
            <td>${transportData[i].nama_kendaraan}</td>
            <td>${transportData[i].destinatin}</td>
            <td>${transportData[i].time_arrival}</td>
        </tr>
    `;
    tbody.innerHTML += html;
    }
}

function getHari(){
    var Hari = document.getElementById("HariPilih").value;
    return Hari
}

const approvebutton = document.getElementById("approvebutton");
approvebutton.addEventListener("click", async () => {
    var Hari = getHari();
    var DataHari = await tp.Transport.getDataWithHari(Hari);
    console.log(DataHari);
    inserthtml(DataHari);
    
})

