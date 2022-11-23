const db = require("../../database");
class Ticket {
  static tickets = [];
  static lastIdTicket = -1;
  constructor(idTiket, nomorTelepon, fastPass, date) {
    this.date = date;
    this.idTiket = idTiket;
    this.nomorTelepon = nomorTelepon;
    this.fastPass = fastPass;
  }
  static async getDataWithId(idTicket) {
    let data = await db.pool.query(
      `select * from ticket where id_ticket=${idTicket}`
    );
    return data;
  }
  static async getData() {
    let data = await db.pool.query("select * from ticket");
    return data;
  }
  static async setLastIdTicket() {
    let id = await db.pool.query(
      "select id_ticket from ticket order by id_ticket desc limit 1"
    );
    if (!id.length) {
      id = 0;
    }else{
        id = id[0].id_ticket
    }
    Ticket.lastIdTicket = id;
    return id;
  }
  static async setUpTicket(idTicket) {
    let data = await db.pool.query(
      `update ticket set fast_pass = 1 where id_ticket = ${idTicket}`
    );
    // let id = await db.pool.query("select * from ticket")
    return data;
  }
  async insertData() {
    const noTelp = this.nomorTelepon;
    const harga = "10000";
    const fp = this.fastPass;
    const date = this.date;
    const result = await db.pool.query(
      `insert into ticket (nomor_telepon,tanggal,harga,fast_pass) values (${noTelp},'${date}',${harga},${fp})`
    );
    return result;
  }
}
module.exports = { Ticket };
