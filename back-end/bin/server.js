const app = require('../src/app');
const http = require('http');


const port = normalizePort(process.env.PORT || '3000'); // Criando porta
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

console.log('Api rodando na porta ' + port);





function normalizePort(val){
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0){
        return port;
    }
    return false;
}