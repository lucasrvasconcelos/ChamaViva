import dados from "../databaseFAKE/dados.js"

export default class UserControler {

    async home(req, res) {
        res.render("home", { layout: 'main', dados } )
    }

    async saleluz(req, res) {
        res.render("saleluz", { layout: 'saleluz' } )
    } 

    async eventos(req, res) {
        res.render("saleluz_new", { layout: 'saleluz_new' } )
    } 
}

