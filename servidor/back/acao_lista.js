
const iniciar = (objt) => {
    var nota = new Object();
    nota.id = objt["id"]
    nota.descrição = objt["descricao"]
    nota.feito = 0

    return nota
}

const adicionar_nota = (objt)=>{
    lista_tarefas.push(iniciar(objt))
}

const alterar_nota = (objt)=>{
    lista_tarefas.forEach(function(item) {
        if (item.id == objt["id"]){
            item.texto = objt["descricao"]
        }
    
      });
}

const textoToNumber = (texto) =>{
    texto === null ? 0 : Number(texto)
}


var lista_tarefas = []
/*
module.exports = {
    excluir_nota,
    alterar_nota,
    criar_nota,
    new_nota
}
*/