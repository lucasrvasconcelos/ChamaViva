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

        return await Clientes.findOne({ where: { cliente_cpf: cpf, cliente_contato_01: contato } });
    }

    async createClient(nome, cpf, contato){
        
        try{
            const clientess = await Clientes.create({
                cliente_nome: nome,
                cliente_contato_01: contato,
                cliente_cpf: cpf
            }, {
                fields: ['cliente_nome', 'cliente_contato_01', 'cliente_cpf']
            })

        } catch(Erros){
            return console.log("Erro na criação do cliente - ClassClient.js")
        } finally{
            return await Clientes.findOne({ where: { cliente_cpf: cpf, cliente_contato_01: contato } });
        }
        
    }
}

export default Client;