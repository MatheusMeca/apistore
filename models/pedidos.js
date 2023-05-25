//Cria o modelo da estrutura da tabela pedido do banco de dados

'use strict' //O strict mode obriga o javascript a mostrar alguns erros que passariam batidos

const { Model, DataTypes } = require('sequelize'); //Importa o modelo do sequelize

module.exports = (sequelize, DataTypes) => { //Exporta o módulo pedidos para ser utilizado
    class Pedidos extends Model { } //Define que a classe Pedidos é estendida do modelo do sequelize

    Pedidos.init({ //Inicializa a tabela classe pedidos passando os dados da tabela criada no Mysql

        //Não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados
        valor_total: DataTypes.BIGINT,
        desconto: DataTypes.DECIMAL(10.0),
        frete: DataTypes.DECIMAL(10.0),
        data_hora: DataTypes.DATE,
        id_cliente: DataTypes.BIGINT,
        id_entrega: DataTypes.BIGINT
    },
        {
            sequelize, //Conexão
            modelName: 'pedidos', //Nome da tabela no banco de dados
            timestamps: false //Desabilita os campos created at e updated at
        });

    return Pedidos
};