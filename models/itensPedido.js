//Cria o modelo da estrutura da tabela itens pedido do banco de dados

'use strict' //O strict mode obriga o javascript a mostrar alguns erros que passariam batidos

const { Model, DataTypes } = require('sequelize'); //Importa o modelo do sequelize

module.exports = (sequelize, DataTypes) => { //Exporta o módulo itens pedido para ser utilizado
    class ItensPedido extends Model { } //Define que a classe ItensPedido é estendida do modelo do sequelize

    ItensPedido.init({ //Inicializa a tabela classe clientes passando os dados da tabela criada no Mysql

        //Não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados
        quantidade: DataTypes.BIGINT,
        valor_parcial: DataTypes.DECIMAL(10.0),
        id_pedido: DataTypes.BIGINT,
        id_produto: DataTypes.BIGINT
    },
        {
            sequelize, //Conexão
            modelName: 'itensPedido', //Nome da tabela no banco de dados
            timestamps: false //Desabilita os campos created at e updated at
        });

    return ItensPedido
};