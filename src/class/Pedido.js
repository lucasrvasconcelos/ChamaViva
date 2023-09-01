import Client from "./ClassCliente.js";

class Pedidos{

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

                return res.json({ msg: "Vou cadastrar você" })

            } 

            
                return res.json({ msg: "Não existe esse usuário, você será cadastrado"})
            
          } catch (error) {

            return res.json({error: "Erro no servidor, consultar suporte"})
   
          }
       
    }
}

export default Pedidos;