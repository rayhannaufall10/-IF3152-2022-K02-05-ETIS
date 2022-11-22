const db = require("../../database")
class Transport{
    static scheduleList = []
    static lastIdTicket = 0;

    static async getDataWithId(idkendaraan){
        let data = await db.pool.query(`select * from transportation where id_kendaraan=${idkendaraan}`)
        return data
    }
    static async getAllData(){
        let data = await db.pool.query("select * from transportation")
        return data
    }
    static async getDataWithHari(harikerja){
        let data = await db.pool.query(`select * from transportation where Hari_Operasi="${harikerja}"`)
        return data
    }
    static async Loopingtable(harikerja){
        for (let i = 0; i < this.getDataWithId(harikerja).length; i++) {
            text += cars[i] + "<br>";
        }
    }
   
}
module.exports = {Transport}