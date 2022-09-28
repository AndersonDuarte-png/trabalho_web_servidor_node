const url = require('url')
const {textoToNumber, retornar_nota,adicionar_nota,alterar_nota,excluir_nota} = require('./acao_lista')

const onGet = (req) =>{
    const urlObjeto = url.parse(req.url, true);
    var id_nota =textoToNumber(urlObjeto.query.id_nota)
    return retornar_nota(id_nota).toString()
}

const onPost = async (req) =>{
    let body = await obterBody(req)
    return adicionar_nota(body).toString()
    
}


const onPut = async (req) =>{
    let body = await obterBody(req)
    return alterar_nota(body,body["id"]).toString()
    
}

const Delete = async (req) =>{
    let body = await obterBody(req)
    return excluir_nota(body).toString()
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