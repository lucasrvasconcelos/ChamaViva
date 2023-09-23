import Client from "./ClassCliente.js";
import Produtos from "../models/Products.js";
import Pedidos from "../models/Pedidos.js"; 
import ItensPedidos from "../models/ItensPedido.js";

import Sequelize  from "sequelize";

class ClassPedido{

    async createPedido(req, res){

        try {
            
            const nome = req.body.nome;
            const contato = req.body.contato;
            const cpf = req.body.cpf;

            const idProduto = req.body.idProduto;
            const qtdProduto = req.body.qtd;
            const tamanho = req.body.tamanho
            const formaPagamento = req.body.fpag;

            if(!nome || !contato || !cpf || !idProduto || !qtdProduto || !formaPagamento){
              console.log(`Nome:${nome} Contato: ${contato} CPF: ${cpf} idproduto: ${idProduto} Quantidade: ${qtdProduto} Pagamento: ${formaPagamento}`)
              return res.json({msg: "Necessário informar todos os campos"})
            }

            const produtoDados = await Produtos.findOne({ where: { id: idProduto} });
            const valorProduto = Number.parseFloat( 35 || produtoDados.Produtos_valor) 
            const valorTotal = valorProduto * qtdProduto

            const dadosPedido = {
              idProduto,
              qtdProduto,
              formaPagamento,
              valorUni: valorProduto,
              tamanho,
              valorTotal
            }

            const cliente = new Client;

            let verifyClient = await cliente.getClient(cpf);

            if(!verifyClient) {

                verifyClient = await cliente.createClient(nome, cpf, contato)
                console.log("Você não possuia cadastro, mas agora foi feito :)")
            } 

            this.setPedido(verifyClient.id, dadosPedido)

            return res.json({ msg: "Seu pedido será registrado"})
            
          } catch (error) {

            console.log(error)
            return res.json({error: "Erro no servidor, consultar suporte"})
   
          }
       
    }

    async setPedido(idCLient, dadosPedido){

      try{

          const createPedido = await Pedidos.create({
            idClient: idCLient,
            valorTotal: dadosPedido.valorTotal,
            pedObs: dadosPedido.formaPagamento
        }, {
            fields: ['idClient', 'valorTotal', 'pedObs']
        })


          const ItendsDoPedido = await ItensPedidos.create({
            idPedido: createPedido.id,
            IdProduto: dadosPedido.idProduto,
            ipdQuantidade: dadosPedido.qtdProduto,
            ipdValor: dadosPedido.valorUni,
            ipdTamanho: dadosPedido.tamanho
          }, {
            fields: ['idPedido', 'IdProduto', 'ipdQuantidade', 'ipdTamanho','ipdValor']
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