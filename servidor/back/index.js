const http = require("http");
const express = require("express");
const app = express();
const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

var ID = 0;
var lista_tarefas = []

const corpo_lista_tarefa = {
    id: gerar_new_id(),
    titulo:"titulo novo",
    descricao:"descricao",
    complete: false

}

//criar_tarefa(tarefa)

function gerar_new_id (){
    return ID += 1
}

function criar_tarefa(tarefa){
    let nova_tarefa = {...tarefa, id: gerar_new_id(),complete: false}
    lista_tarefas.push(nova_tarefa)
}



function trazerListaTarefa (){
    return lista_tarefas
}

app.get("/lista", (req, res) => {
    let lista = trazerListaTarefa()
    res.status(200).json({status: 'ok', lista});
});

app.post("/inserir_lista", (req, res) => {
    console.log(req.body)
    let lista = trazerListaTarefa()
    res.status(200).json({status: 'ok', lista});
});


http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));