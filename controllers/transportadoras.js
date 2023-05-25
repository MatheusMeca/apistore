//Cria as funções de controle da busca

const Sequelize = require('sequelize'); //importa o Sequelize
const sequelize = require('../db/db');//importa a conexão com o banco de dados
const Transportadoras = require('../models/transportadoras.js');//importa a classe Clients da pasta models.

module.exports = { //exporta o módulo que vai trazer as informações para cada rota.

    //SELECT * FROM transportadora
    async getAll(req, res) {
        const transportadoras = await Transportadoras(sequelize, Sequelize.DataTypes).findAll();//

        res.status(200).send(transportadoras)
    },
    
    async get(req, res) {
        const transportadoras = await Transportadoras(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(transportadoras)
    },
    async create(req, res) {
        const transportadoras = await Transportadoras(sequelize, Sequelize.DataTypes).create({
            cnpj: req.body.cnpj,
            nome_transportadora: req.body.nome_transportadora,
            telefone: req.body.telefone,
            endereco: req.body.endereco
        })

        res.status(201).send({
            message: "Transportadora cadastrado com sucesso."
        })
    },
    async update(req, res) {
        const transportadoras = await Transportadoras(sequelize, Sequelize.DataTypes).update({
            cnpj: req.body.cnpj,
            nome_transportadora: req.body.nome_transportadora,
            telefone: req.body.telefone,
            endereco: req.body.endereco
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: ('Transportadora atualizado com sucesso.')
        })
    },
    async delete(req, res) {
        await Transportadoras(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: ('Transportadora excluído com sucesso.')
        })
    }
};