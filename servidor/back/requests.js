const url = require('url')
const {new_nota,criar_nota,alterar_nota,excluir_nota} = require('./acao_lista')

const onGet = (req) =>{
    const urlObjeto = url.parse(req.url, true);
    var nota = new_nota(urlObjeto.query.nota)

    return criar_nota(nota).toString()
}

const onPost = async (req) =>{
    let body = await obterBody(req)
    var nota = new_nota(body.nota)
    return alterar_nota(nota).toString()
    
}


const onPut = async (req) =>{
    let body = await obterBody(req)
    var nota = new_nota(body.nota)
    return alterar_nota(nota).toString()
    
}

const Delete = async (req) =>{
    let body = await obterBody(req)
    var nota = new_nota(body.nota)
    return excluir_nota(nota).toString()
}

const obterBody = (req) => new Promise((resolve) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });
    req.on('end', () => {
        resolve(JSON.parse(data));
    });
})

module.exports = {
    onGet,
    onPost,
    onPut,
    Delete
}