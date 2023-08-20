import dados from "../databaseFAKE/dados.js"
import User from "../models/User.js"

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

    async new(req, res) {
        res.render("system", { layout: 'system' } )
    }

    async login(req, res) {

        console.log(req.body)


        const user = req.body.user
        const pass = req.body.pass
        const notParams = []
        
        if(!user){
            notParams.push("Usuário")
        }
        if(!pass){
            notParams.push("Senha")
        }

        if(notParams.length > 0){
             return res.json({error: "Digite usuário e senha"})
        }

        try {
            // Consultar o banco de dados para verificar o usuário
            const userFind = await User.findOne({ where: { username: user, password: pass } });

            if(userFind) {

                

                req.session.user = userFind.id

                console.log(req.session.user)

                return res.json({ success: true })

            } else {
                return res.json({error: "Credênciais inválidas"})
            }
          } catch (error) {
            console.log(error)
            return res.json({error: "Erro no servidor, consultar suporte"})
          }
    }

    async dashboard(req, res) {
        res.render("dashboard", { layout: 'dashboard' } )
    }

    async vendas(req, res) {
        res.render("vendas", { layout: 'dashboard' } )
    }
}

