//Roteador - Define as requisições na rota

const express = require('express'); //importa o express

const router = express.Router(); //importa o roteador do express e armazena na const router

const transportadorasController = require('../controllers/transportadoras')//importa o módulo transportadoraController

//Criar as rotas HTTP

//Cria a rota para retornar todos os clientes
router.get('/', (req, res) => {
    transportadorasController.getAll(req, res)
}); //chama o controlador transportadoraController

//Cria a rota para retornar um cliente específico
router.get('/:id', (req, res) => {
    transportadorasController.get(req, res)
})

//Rota POST - Criar / Cadastrar 
router.post('/', (req, res) => { //cria a requisição do tipo POST
    transportadorasController.create(req, res)
});

//Rota PUT - Atualizar / Editar
router.put('/:id', (req, res) => {
    transportadorasController.update(req, res)
});

//Cria a requisição DELETE - Apagar
router.delete('/:id', (req, res) =>{
    transportadorasController.delete(req, res)
});

module.exports = router;