//Realiza a conexão com o banco de dados

const {Sequelize} = require('sequelize'); //Importa o conteúdo do sequelize para ser utilizado na conexão.

const sequelize = new Sequelize('universe_store', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
}); //Cria uma conexão do tipo sequelize passando as informações essenciais para a conexão com o banco de dados (nome_banco, usuário, senha, local e tipo_banco utilizados).

sequelize.authenticate() //Chama o método próprio para autenticação do sequelize
.then(function() { //Verifica se deu certo e envia uma mensagem OK
    console.log('Conexão realizada com sucesso!')
})
.catch(function() { //Verifica se deu errado e envia o erro
    console.log('ERRO: Não foi possível realizar a conexão')
});

module.exports = sequelize; //Exporta a conexão com o banco para ser utilizada