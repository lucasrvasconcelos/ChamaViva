import Clientes from "../models/Clientes.js";



class Client {

    // constructor(){
        // const nome = req.body.nome
        // const contato = req.body.contato
        // const cpf = req.body.cpf
        // const notParams = []

        // if(!nome){
        //     notParams.push("Nome")
        // }

        // if(!contato){
        //     notParams.push("Contato")
        // }

        // if(!cpf){
        //     notParams.push("CPF")
        // }

        // if(notParams.length > 0){
        //      return res.json({error: `Preencha ${notParams}`})
        // }
    // }

    async getClient(nome, cpf, contato){
        const clientFind = await Clientes.findOne({ where: { cliente_cpf: cpf, cliente_contato_01: contato } });

        

        if(clientFind){
            return clientFind
        } else {
            return false
        }
    }
}

export default Client;