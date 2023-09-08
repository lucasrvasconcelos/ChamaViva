import Clientes from "../models/Clientes.js";



class Client {


    async getClient(cpf){

        return await Clientes.findOne({ where: { cliente_cpf: cpf } });
    }

    async createClient(nome, cpf, contato){
        
        try{
            const clientes = await Clientes.create({
                cliente_nome: nome,
                cliente_contato_01: contato,
                cliente_cpf: cpf
            }, {
                fields: ['cliente_nome', 'cliente_contato_01', 'cliente_cpf']
            })

            return clientes
        } catch(Erros){
            return console.log("Erro na criação do cliente - ClassClient.js " + Erros)
        }
        
    }
}

export default Client;