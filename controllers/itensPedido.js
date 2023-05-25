//Cria as funções de controle da busca

const Sequelize = require('sequelize'); //importa o Sequelize
const sequelize = require('../db/db');//importa a conexão com o banco de dados
const ItensPedido = require('../models/itensPedido.js');//importa a classe ItensPedido da pasta models.

module.exports = { //exporta o módulo que vai trazer as informações para cada rota.

    //SELECT * FROM itens_pedido
    async getAll(req, res) {
        const itensPedido = await ItensPedido(sequelize, Sequelize.DataTypes).findAll();//

        res.status(200).send(itensPedido)
    },
    
    async get(req, res) {
        const itensPedido = await ItensPedido(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(itensPedido)
    },
    async create(req, res) {
        const itensPedido = await ItensPedido(sequelize, Sequelize.DataTypes).create({
            quantidade: req.body.quantidade,
            valor_parcial: req.body.valor_parcial,
            id_pedido: req.body.id_pedido,
            id_produto: req.body.id_produto
        })

        res.status(201).send({
            message: "Item pedido cadastrado com sucesso."
        })
    },
    async update(req, res) {
        const itensPedido = await ItensPedido(sequelize, Sequelize.DataTypes).update({
            quantidade: req.body.quantidade,
            valor_parcial: req.body.valor_parcial,
            id_pedido: req.body.id_pedido,
            id_produto: req.body.id_produto
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: ('Item pedido atualizado com sucesso.')
        })
    },
    async delete(req, res) {
        await ItensPedido(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: ('Item pedido excluído com sucesso.')
        })
    }
};


