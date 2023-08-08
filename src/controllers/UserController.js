import dados from "../databaseFAKE/dados.js"

export default class UserControler {

    async home(req, res) {
        console.log(dados.section_01.groupImages[0])
        res.render("home", { dados } )
    } 
}