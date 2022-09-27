const http = require('http');
const {onGet, onPost, onPut, Delete} = require('./requests')

const hostname = '127.0.0.1';
const port = 3737;

const headersCors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PUT, POST, GET',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
}

const headers = {
    ...headersCors,
    'Content-Type': 'text/plain'
}

const server = http.createServer(async(res,req) =>{
    let resultado = ""
    switch(res.method){
        case "GET":
            resultado = onGet(req);
            res.writeHead(200, headers);
            res.end(resultado);
            break;
        case "POST":
            resultado = await onPost(req);
            res.writeHead(200, headers);
            res.end(resultado);
            break;

        case "PUT":
            resultado = await onPut(req);
            res.writeHead(200, headers);
            res.end(resultado);
            break;
        
        case "DELETE":
            resultado = await Delete(req);
            res.writeHead(200, headers);
            res.end(resultado);
            break;
        
        default:      
            res.writeHead(405, headers)
            res.end(`${req.method} não é aceito por este servidor`)
    }
});

server.listen(port, hostname, () => {
    console.log(`O server está rodando na URL: http://${hostname}:${port}/`);
});