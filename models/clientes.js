//Cria o modelo da estrutura da tabela cliente do banco de dados

'use strict' //O strict mode obriga o javascript a mostrar alguns erros que passariam batidos

const { Model, DataTypes } = require('sequelize'); //Importa o modelo do sequelize

module.exports = (sequelize, DataTypes) => { //Exporta o módulo clientes para ser utilizado
    class Clientes extends Model { } //Define que a classe Clientes é estendida do modelo do sequelize

    Clientes.init({ //Inicializa a tabela classe clientes passando os dados da tabela criada no Mysql

        //Não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados
        cpf: DataTypes.BIGINT,
        nome_cliente: DataTypes.STRING(50),
        nascimento: DataTypes.DATE,
        sexo: DataTypes.STRING(50),
        email: DataTypes.STRING(50),
        endereco: DataTypes.STRING(150),
        bairro: DataTypes.STRING(50),
        complemento: DataTypes.STRING(25),
        cep: DataTypes.INTEGER,
        cidade: DataTypes.STRING(50),
        telefone: DataTypes.BIGINT
    },
        {
            sequelize, //Conexão
            modelName: 'clientes', //Nome da tabela no banco de dados
            timestamps: false //Desabilita os campos created at e updated at
        });

    return Clientes
};