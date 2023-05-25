const express = require('express'); //importa o módulo express e armazena na constante.

const app = express(); //cria uma aplicação do tipo express

const clientesRoute = require('./routes/clientesRoute') // importa as rotas do arquivo clientesRoute

const transportadorasRoute = require('./routes/transportadorasRoute') // importa as rotas do arquivo transportadorasRoute

const produtosRoute = require('./routes/produtosRoute') // importa as rotas do arquivo produtosRoute

const pedidosRoute = require('./routes/pedidosRoute') // importa as rotas do arquivo pedidosRoute

const itensPedidoRoute = require('./routes/itensPedidoRoute') // importa as rotas do arquivo itnsPedidoRoute

//Localização / Referência (. abre o mesmo local do arquivo em que está sendo relacionado - ORIGEM)
// ( / abre as opções dentro do local escolhido)
// (escolher o arquivo necessário para a importação)

app.use(express.json()) //chama o middleware que faz ele ler as informações do body (tradutor)

app.use('/clientes', clientesRoute);//chama a rota Clientes

app.use('/transportadoras', transportadorasRoute);//chama a rota Transportadoras

app.use('/produtos', produtosRoute);//chama a rota Produtos

app.use('/pedidos', pedidosRoute);//chama a rota Pedidos

app.use('/itenspedido', itensPedidoRoute);//chama a rota Pedidos

//Tratamento de Erros 

//Caso a rota não seja encontrada
app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada.') //criando uma constante ERRO do tipo ERROR, reaproveitando a estrutura já criada pelo construtor.
    erro.status = 404; //modifica o status para 404 NOT FOUND ou Rota não encontrada
    next(erro)//executa a próxima função
});

app.use((error, req, res, next) => { 
    res.status(error.status || 500); //verifica o status do Error
    return res.send({
        erro: { //retorna o erro na estrutura criada 
            message: error.message
        }
    })
});

module.exports = app; //exporta este arquivo para ser utilizado em outros locais
