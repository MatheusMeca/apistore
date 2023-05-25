//Cria as funções de controle da busca

const Sequelize = require('sequelize'); //importa o Sequelize
const sequelize = require('../db/db');//importa a conexão com o banco de dados
const Pedidos = require('../models/pedidos.js');//importa a classe Pedidos da pasta models.

module.exports = { //exporta o módulo que vai trazer as informações para cada rota.

    //SELECT * FROM Pedidos
    async getAll(req, res) {
        const pedidos = await Pedidos(sequelize, Sequelize.DataTypes).findAll();//

        res.status(200).send(pedidos)
    },
    
    async get(req, res) {
        const pedidos = await Pedidos(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(pedidos)
    },
    async create(req, res) {
        const pedidos = await Pedidos(sequelize, Sequelize.DataTypes).create({
            valor_total: req.body.valor_total,
            desconto: req.body.desconto,
            frete: req.body.frete,
            data_hora: req.body.data_hora,
            id_cliente: req.body.id_cliente,
            id_entrega: req.body.id_entrega
        })

        res.status(201).send({
            message: "Pedido cadastrado com sucesso."
        })
    },
    async update(req, res) {
        const pedidos = await Pedidos(sequelize, Sequelize.DataTypes).update({
            valor_total: req.body.valor_total,
            desconto: req.body.desconto,
            frete: req.body.frete,
            data_hora: req.body.data_hora,
            id_cliente: req.body.id_cliente,
            id_entrega: req.body.id_entrega
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: ('Pedido atualizado com sucesso.')
        })
    },
    async delete(req, res) {
        await Pedidos(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: ('Pedido excluído com sucesso.')
        })
    }
};


