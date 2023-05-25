//Cria as funções de controle da busca

const Sequelize = require('sequelize'); //importa o Sequelize
const sequelize = require('../db/db');//importa a conexão com o banco de dados
const Clientes = require('../models/clientes.js');//importa a classe Clientes da pasta models.

module.exports = { //exporta o módulo que vai trazer as informações para cada rota.

    //SELECT * FROM clientes
    async getAll(req, res) {
        const clientes = await Clientes(sequelize, Sequelize.DataTypes).findAll();//

        res.status(200).send(clientes)
    },
    
    async get(req, res) {
        const clientes = await Clientes(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })

        res.status(200).send(clientes)
    },
    async create(req, res) {
        const clientes = await Clientes(sequelize, Sequelize.DataTypes).create({
            cpf: req.body.cpf,
            nome_cliente: req.body.nome_cliente,
            nascimento: req.body.nascimento,
            sexo: req.body.sexo,
            email: req.body.email,
            endereco: req.body.endereco,
            bairro: req.body.bairro,
            complemento: req.body.complemento,
            cep: req.body.cep,
            cidade: req.body.cidade,
            telefone: req.body.telefone
        })

        res.status(201).send({
            message: "Cliente cadastrado com sucesso."
        })
    },
    async update(req, res) {
        const clientes = await Clientes(sequelize, Sequelize.DataTypes).update({
            cpf: req.body.cpf,
            nome_cliente: req.body.nome_cliente,
            nascimento: req.body.nascimento,
            sexo: req.body.sexo,
            email: req.body.email,
            endereco: req.body.endereco,
            bairro: req.body.bairro,
            complemento: req.body.complemento,
            cep: req.body.cep,
            cidade: req.body.cidade,
            telefone: req.body.telefone
        },
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).send({
            message: ('Cliente atualizado com sucesso.')
        })
    },
    async delete(req, res) {
        await Clientes(sequelize, Sequelize.DataTypes).destroy({
            where: { id: req.params.id }
        })
        res.status(200).send({
            message: ('Cliente excluído com sucesso.')
        })
    }
};


