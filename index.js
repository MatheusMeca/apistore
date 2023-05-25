const http = require('http'); //Inicia o HTTP dentro do projeto (importa)
const app = require('./app');

const port = 7070; //Define a porta onde vai rodar o servidor

const server = http.createServer(app); //Cria o servidor http

server.listen(port,() => {
    console.log('Servidor iniciado com sucesso na porta '+ port)  
}); //Ativa a escuta as requisições na porta 7070