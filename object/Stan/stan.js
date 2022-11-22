const db = require("../../database")
class Stan {
    constructor(id, name, path_photo, menu) {
        this.id = id
        this.name = name
        this.path_photo = path_photo
        this.photo_menu = photo_menu
    }
    static async getDataWithId(id){
        let data = await db.pool.query("select * from stan where id=${id}")
        return data
    }
    static async getData(){
        let data = await db.pool.query("select * from stan")
        return data
    }
    static async getName(id){
        let data = await db.pool.query("select name from stan where id=${id}")
        return data
    }
    static async getPhoto(id){
        let data = await db.pool.query("select path_photo from stan where id=${id}")
        return data
    }
    static async getMenu(id){
        let data = await db.pool.query("select photo_menu from stan where id=${id}")
        return data
    }
}
module.exports = {Stan}