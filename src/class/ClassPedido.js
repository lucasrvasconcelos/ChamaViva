import Client from "./ClassCliente.js";
import Produtos from "../models/Products.js";
import Pedidos from "../models/Pedidos.js"; 
import ItensPedidos from "../models/ItensPedido.js";

import sequelize from "sequelize";

class ClassPedido{

    async createPedido(req, res){
      const t = await sequelize.transaction();

        try {
            


            const nome = req.body.nome;
            const contato = req.body.contato;
            const cpf = req.body.cpf;

            const idProduto = req.body.idProduto;
            const qtdProduto = req.body.qtd;
            const formaPagamento = req.body.fpag;

            if(!nome || !contato || !cpf || !idProduto || !qtdProduto || !formaPagamento){
              return res.json({msg: "Necessário informar todos os campos"})
            }

            const produtoDados = await Produtos.findOne({ where: { id: idProduto} });
            const valorProduto = Number.parseFloat(produtoDados.Produtos_valor || 0) 
            const valorTotal = valorProduto * qtdProduto

            const dadosPedido = {
              idProduto,
              qtdProduto,
              formaPagamento,
              valorUni: valorProduto,
              valorTotal
            }

            const cliente = new Client;
            let verifyClient = await cliente.getClient(cpf);

            if(!verifyClient) {

                verifyClient = await cliente.createClient(nome, cpf, contato)
                console.log(verifyClient.id)
                console.log("Você não possuia cadastro, mas agora foi feito :)")
            } 

             this.setPedido(verifyClient.id, dadosPedido)


            await t.commit();


            return res.json({ msg: "Seu pedido será registrado"})
            
          } catch (error) {

            await t.rollback();

            return res.json({error: "Erro no servidor, consultar suporte"})
   
          }
       
    }

    async setPedido(idCLient, dadosPedido){

      try{

          const createPedido = await Pedidos.create({
            idClient: idCLient,
            valorTotal: dadosPedido.valorTotal
        }, {
            fields: ['idClient', 'valorTotal']
        })


          const ItendsDoPedido = await ItensPedidos.create({
            idPedido: createPedido.id,
            IdProduto: dadosPedido.idProduto,
            ipdQuantidade: dadosPedido.qtdProduto,
            ipdValor: dadosPedido.valorUni
          }, {
            fields: ['idPedido', 'IdProduto', 'ipdQuantidade', 'ipdValor']
          })


    } catch(Erros){

        console.log("Erro na insersção do seu pedido")
        return console.log(Erros)

    } finally{

        console.log("Pedido Registrado com sucesso")
    }
  }
}

export default ClassPedido;