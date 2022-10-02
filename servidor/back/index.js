const http = require("http");
const express = require("express");
const app = express();
const bp = require('body-parser');
app.use(bp.json())

var ID = 0;
var lista_tarefas = []

const exemplo_lista_tarefa = {
    "id": "",
    //"titulo":"exemplo de tarefa",
    "descricao":"exemplo de tarefa",
    "complete": false

}

criar_tarefa(exemplo_lista_tarefa)

function gerar_new_id (){
    return ID += 1
}

function criar_tarefa(tarefa){
    //console.log(tarefa)
    let nova_tarefa = {"id": gerar_new_id(),"descricao": tarefa["descricao"],"complete": false}
    lista_tarefas.push(nova_tarefa)
}

function alterar_tarefa(tarefa,id){
    lista_tarefas.forEach(alterar_lista)
    function alterar_lista(objt){
        if(Number(objt.id) === id){
            objt.descricao = tarefa.descricao
            objt.complete = tarefa.complete
        }
    }
}

function deletar_tarefa(id){
    //tarefa passada como argumento para possivis validações futuras
    let index = lista_tarefas.map(objt => objt.id).indexOf(id)

    if (index > -1){
        lista_tarefas.splice(index,1)
    }
}

function trazerListaTarefa (){
    return lista_tarefas
}

app.get("/lista", (req, res) => {
    let lista = trazerListaTarefa()
    res.status(200).json({status: 'ok', lista});
});

app.post("/inserir_tarefa", (req, res) => {
    criar_tarefa(req.body)
    let lista = trazerListaTarefa()
    res.status(200).json({status: 'ok', lista});
});

app.put("/alterar_tarefa/:id",(req,res) =>{
    alterar_tarefa(req.body, Number(req.params.id))
    let lista = trazerListaTarefa()
    res.status(200).json({status: 'ok', lista})
});

app.delete("/excluir_tarefa/:id",(req,res) =>{
    deletar_tarefa(Number(req.params.id))
    let lista = trazerListaTarefa()
    res.status(200).json({status: 'ok', lista})
})

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));