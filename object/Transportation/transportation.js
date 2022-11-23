const db = require("../../database")
class Transport{
    static scheduleList = []
    static lastIdTicket = 0;

    static async getDataWithHari(harikerja){
        let data = await db.pool.query(`select * from transportation where Hari_Operasi="${harikerja}" order by time_arrival asc`)
        return data
    }
}
module.exports = {Transport}