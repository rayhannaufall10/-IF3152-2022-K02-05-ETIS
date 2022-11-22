const db = require("../../database")
class Ticket{
    static tickets =[]
    static lastIdTicket = 0;
    constructor(idTiket,nomorTelepon,fastPass){
        this.idTiket = idTiket
        this.nomorTelepon = nomorTelepon
        this.fastPass = fastPass
    }
    static async getDataWithId(idTicket){
        let data = await db.pool.query(`select * from ticket where id_tiket=${idTicket}`)
        // console.log(data[0].nomor_telepon);
        return data
    }
    static async getData(){
        let data = await db.pool.query("select * from ticket")
        return data
    }
    static async setLastIdTicket(){
        let id = await db.pool.query("select id_ticket from ticket order by id_ticket desc limit 1")
        id = id[0].id_tiket
        Ticket.lastIdTicket = id;
        console.log(id);
        return id;
    }
    async insertData(){
        const noTelp = this.nomorTelepon
        const harga = 10000
        const fp = true
        const date = new Date()
        const result = await db.pool.query(`insert into ticket (nomor_telepon,tanggal,harga,fast_pass) values (${noTelp},${date},${harga},${fp})`)
        return result
    }
}
module.exports = {Ticket}