const server_port = 8081

const express = require("express") //IMPORTAÇÃO DO MODULE EXPRESS
const app = express() // UTILIZAÇÃO DA IMPORTAÇÃO POR MEIO DE UMA VARIÁVEL

app.listen(8081, function (){
    console.log("O servidor está rodando na porta 8081") //CALLBACK
}) // CRIAÇÃO DO SERVIDOR COM PORTA 8081

                     //REQUIRE, RESPONSE
app.get("/", function(req, res){
    res.end("Seja bem-vindo ao Node.JS")
})

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