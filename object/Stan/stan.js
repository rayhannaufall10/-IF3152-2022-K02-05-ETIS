const db = require("../../database")
class Stan {
    constructor(id_stan, nama_stan, path_logo, path_menu) {
        this.id_stan = id_stan
        this.nama_stan = nama_stan
        this.path_logo = path_logo
        this.path_menu = path_menu
    }
    static async getDataWithId(id_stan){
        let data = await db.pool.query("select * from stan where id_stan=${id_stan}")
        return data
    }
    static async getData(){
        let data = await db.pool.query("select * from stan")
        return data
    }
}
module.exports = {Stan}