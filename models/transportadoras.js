//Cria o modelo da estrutura da tabela transportadora do banco de dados

'use strict' //O strict mode obriga o javascript a mostrar alguns erros que passariam batidos

const { Model, DataTypes } = require('sequelize'); //Importa o modelo do sequelize

module.exports = (sequelize, DataTypes) => { //Exporta o módulo transportadora para ser utilizado
    class Transportadoras extends Model { } //Define que a classe Transportadora é estendida do modelo do sequelize

    Transportadoras.init({ //Inicializa a tabela classe transportadora passando os dados da tabela criada no Mysql

        //Não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados
        cnpj: DataTypes.BIGINT,
        nome_transportadora: DataTypes.STRING(100),
        telefone: DataTypes.BIGINT,
        endereco: DataTypes.STRING(100)
    },
        {
            sequelize, //Conexão
            modelName: 'transportadoras', //Nome da tabela no banco de dados
            timestamps: false //Desabilita os campos created at e updated at
        });

    return Transportadoras
};