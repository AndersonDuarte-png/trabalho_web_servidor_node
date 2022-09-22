const input_titulo_tarefa = document.getElementById("input_titulo_tarefa")
const input_tarefa_descricao = document.getElementById("input_tarefa_descricao")
const button_tarefa = document.getElementById("button_tarefa")
const div_lista_tarefas = document.getElementById("div_lista_tarefas")
const div_tarefa = document.getElementById("div_tarefa")

button_tarefa.addEventListener('click', async (e) => {

    const input_title = input_titulo_tarefa.value
    const input_descricao = input_tarefa_descricao.value
    
    if(input_title != None || input_descricao != None){

        //var resGet = await fazerGet(input_title, input_descricao)
        var resPost = await fazerPost(input_title, input_descricao)

        //var textoGet = await resGet.text()
        var textoPost = await resPost.text()
        //span_get.textContent = textoGet
        span_post.textContent = textoPost

        div_lista_tarefas.style.display = "block"
        div_tarefa.style.display = "block"

    } else {
        div_lista_tarefas.style.display = "none"
    }

})

//const fazerGet = (numero1, numero2) => fetch(`http://127.0.0.1:3000?numero1=${numero1}&numero2=${numero2}`)
const fazerPost = (input_title, input_descricao) => fetch(
    'http://127.0.0.1:3000', {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ input_title, input_descricao })
    })