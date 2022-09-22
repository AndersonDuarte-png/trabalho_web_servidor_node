const url = require('url')
const {new_nota,alterar_nota,excluir_nota} = require('./acao_nota')

const onGet = (req) =>{
    const urlObjeto = url.parse(req.url, true);
    
}
