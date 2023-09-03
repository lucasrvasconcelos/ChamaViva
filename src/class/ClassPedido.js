import Client from "./ClassCliente.js";
import Pedidos from "../models/Pedidos.js"; 

class ClassPedido{

    async createPedido(req, res){
        try {
            // Consultar o banco de dados para verificar o usuário
            const nome = req.body.nome;
            const contato = req.body.contato;
            const cpf = req.body.cpf;

            const idProduto = req.query.idProduto;
            const tamanhoProduto = req.query.TamProduto;

            const pagamento = req.query.pedFormpagamento;

            const cliente = new Client;
            const verifyClient = await cliente.getClient(nome, cpf, contato);

            if(!verifyClient) {
                
                const criarUsuario = await cliente.createClient(nome, cpf, contato)

                this.setPedido(await criarUsuario.id)

                return res.json({ msg: "Vou cadastrar você" })

            } 

            this.setPedido(await verifyClient.id)

            return res.json({ msg: "Você está cadastrado, vou inserir seu pedido"})
            
          } catch (error) {
            console.log(error)
            return res.json({error: "Erro no servidor, consultar suporte"})
   
          }
       
    }

    async setPedido(idCLient){

      try{

        // const checkPedidoUser = await Pedidos.findOne({ where: { idClient: idCLient } });
          const createPedido = await Pedidos.create({
            idClient: idCLient,
            valorTotal: 85
        }, {
            fields: ['idClient', 'valorTotal']
        })

          // const updatePedido = await Pedidos.update({ valorTotal: 159 }, {
          //   where: {
          //     idClient: idCLient
          //   }

    } catch(Erros){
        return console.log(Erros)
    }
  }
}

export default ClassPedido;