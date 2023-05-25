//Cria o modelo da estrutura da tabela produto do banco de dados

'use strict' //O strict mode obriga o javascript a mostrar alguns erros que passariam batidos

const { Model, DataTypes } = require('sequelize'); //Importa o modelo do sequelize

module.exports = (sequelize, DataTypes) => { //Exporta o módulo produtos para ser utilizado
    class Produtos extends Model { } //Define que a classe Produtos é estendida do modelo do sequelize

    Produtos.init({ //Inicializa a tabela classe produtos passando os dados da tabela criada no Mysql

        //Não passo o ID porque ele está definido como AUTOINCREMENTO no banco de dados
        nome_produto: DataTypes.STRING(100),
        valor_produto: DataTypes.DECIMAL(10.0),
        marca: DataTypes.STRING(100), 
        modelo: DataTypes.STRING(100), 
        tamanho: DataTypes.STRING(2), 
        tipo: DataTypes.STRING(100),
    },
        {
            sequelize, //Conexão
            modelName: 'produtos', //Nome da tabela no banco de dados
            timestamps: false //Desabilita os campos created at e updated at
        });

    return Produtos
};