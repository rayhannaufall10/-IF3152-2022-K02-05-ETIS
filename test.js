const ticket = require("./object/Tiket/tiket")
const moment = require('moment')
let tiket = new ticket.Ticket('08123456',0)
const tmp = moment()
const date = tmp.format("YYYY-MM-DD HH:mm:ss")

ticket.Ticket.setLastIdTicket()
// console.log(tiket.insertData());