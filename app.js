const server_port = 8081

const fs = require('fs');
const path = require('path');
const express = require('express') //IMPORTAÇÃO DO MODULE EXPRESS
const app = express() // UTILIZAÇÃO DA IMPORTAÇÃO POR MEIO DE UMA VARIÁVEL

app.listen(8081, function (){
    console.log("O servidor está rodando na porta 8081") //CALLBACK
}) // CRIAÇÃO DO SERVIDOR COM PORTA 8081

//REQUIRE, RESPONSE
app.get("/", function(req, res) {
    // Define o caminho do HTML
    const filePath = path.join(__dirname, 'src/index.html');

    fs.readFile(filePath, 'utf8', function(err, conteudo) {
        // Caso dê erro...
        if (err) {
            // Print no console pra caso dê erro
            console.log("Não foi possível carregar a página...");

            // Finaliza a resposta com o server e mostra mensagem de erro
            res.status(500).end("Erro interno do servidor.");
            return;
        }

        // Define o tipo de conteúdo como HTML
        res.setHeader('Content-type', 'text/html');

        // Envia o conteúdo do arquivo como resposta
        res.end(conteudo);
    });
});

// Quando se usa : numa rota, servirá como um parâmetro 

// app.get("/cadastrar/:item/:quantidade", function(req, res){
//     res.end("Item: " + req.params.item + "\nQuantidade: " + req.params.quantidade)
// })

app.get("/cadastrar/produto/:produto", function(req, res){
    res.end("Produto: " + req.params.produto)
})

app.get("/pesquisar/produtos/modelo/:modelo", function(req, res){
    res.end("Modelo: " + req.params.modelo)
})

app.get("/contato/sac/produto/:produto", function(req, res){
    res.end("Produtos: " + req.params.produto)
})

app.get("/contato", function(req, res){
    res.end("Página de contato")
})

app.get("/server_port", function(req, res){
    res.end("A porta deste localhost é " + server_port)
})