const tm = require('./tiket.js')
describe('getdata',()=>{
    test('should return 1', async ()=>{
        const value = {"fast_pass": 0, "harga": "10000", "id_ticket": 1, "nomor_telepon": "08990821878", "tanggal": "22 November 2022"}
        let result = await tm.Ticket.getDataWithId(1)
        result = result[0]
        expect(result).toEqual(value)
    })
})