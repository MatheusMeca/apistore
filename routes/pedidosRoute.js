//Roteador - Define as requisições na rota

const express = require('express'); //importa o express

const router = express.Router(); //importa o roteador do express e armazena na const router

const pedidosController = require('../controllers/pedidos')//importa o módulo pedidosController

//Criar as rotas HTTP

//Cria a rota para retornar todos os clientes
router.get('/', (req, res) => {
    pedidosController.getAll(req, res)
}); //chama o controlador clientesController

//Cria a rota para retornar um cliente específico
router.get('/:id', (req, res) => {
    pedidosController.get(req, res)
})

//Rota POST - Criar / Cadastrar 
router.post('/', (req, res) => { //cria a requisição do tipo POST
    pedidosController.create(req, res)
});

//Rota PUT - Atualizar / Editar
router.put('/:id', (req, res) => {
    pedidosController.update(req, res)
});

//Cria a requisição DELETE - Apagar
router.delete('/:id', (req, res) =>{
    pedidosController.delete(req, res)
});

module.exports = router;



