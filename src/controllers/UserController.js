import dados from "../databaseFAKE/dados.js"

export default class UserControler {

    async home(req, res) {
        res.render("home", { dados } )
    } 
}