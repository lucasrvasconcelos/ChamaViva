import dados from "../databaseFAKE/dados.js"

export default class UserControler {

    async home(req, res) {
        res.render("home", { layout: 'main', dados } )
    }

    async saleluz(req, res) {
        res.render("saleluz", { layout: 'saleluz' } )
    } 
}

