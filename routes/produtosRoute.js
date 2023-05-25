//Roteador - Define as requisições na rota

const express = require('express'); //importa o express

const router = express.Router(); //importa o roteador do express e armazena na const router

const produtosController = require('../controllers/produtos')//importa o módulo produtosController

//Criar as rotas HTTP

//Cria a rota para retornar todos os clientes
router.get('/', (req, res) => {
    produtosController.getAll(req, res)
}); //chama o controlador clientesController

//Cria a rota para retornar um cliente específico
router.get('/:id', (req, res) => {
    produtosController.get(req, res)
})

//Rota POST - Criar / Cadastrar 
router.post('/', (req, res) => { //cria a requisição do tipo POST
    produtosController.create(req, res)
});

//Rota PUT - Atualizar / Editar
router.put('/:id', (req, res) => {
    produtosController.update(req, res)
});

//Cria a requisição DELETE - Apagar
router.delete('/:id', (req, res) =>{
    produtosController.delete(req, res)
});

module.exports = router;



