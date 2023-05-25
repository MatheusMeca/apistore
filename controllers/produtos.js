//Cria as funções de controle da busca

const Sequelize = require('sequelize'); //importa o Sequelize
const sequelize = require('../db/db');//importa a conexão com o banco de dados
const Produtos = require('../models/produtos.js');//importa a classe produtos da pasta models.

module.exports = { //exporta o módulo que vai trazer as informações para cada rota.

    //SELECT * FROM produtos
    async getAll(req, res) {
        const produtos = await Produtos(sequelize, Sequelize.DataTypes).findAll();//

        res.status(200).send(produtos)
    },
    
    async get(req, res) {
        const produtos = await Produtos(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(produtos)
    },
    async create(req, res) {
        const produtos = await Produtos(sequelize, Sequelize.DataTypes).create({
            nome_produto: req.body.nome_produto,
            valor_produto: req.body.valor_produto,
            marca: req.body.marca,
            modelo: req.body.modelo,
            tamanho: req.body.tamanho,
            tipo: req.body.tipo
        })

        res.status(201).send({
            message: "Produto cadastrado com sucesso."
        })
    },
    async update(req, res) {
        const produtos = await Produtos(sequelize, Sequelize.DataTypes).update({
            nome_produto: req.body.nome_produto,
            valor_produto: req.body.valor_produto,
            marca: req.body.marca,
            modelo: req.body.modelo,
            tamanho: req.body.tamanho,
            tipo: req.body.tipo
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: ('Produto atualizado com sucesso.')
        })
    },
    async delete(req, res) {
        await Produtos(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: ('Produto excluído com sucesso.')
        })
    }
};


