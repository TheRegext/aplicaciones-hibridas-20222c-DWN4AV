const http = require('http')

let cantidad = 0

const server = http.createServer(function (request, response) {
    console.log('request received')
    //response.write('Otro texto')

    if (request.url === '/') {
        for (let i = 0; i < 10; i++) {
            response.write('<h1>Hola mundo</h1>') // envia un dato al cliente
        }
        response.end() // termina la respuesta
    }
    else if (request.url === '/visitas') {
        response.end(`
            <html>
                <head>
                    <title>Mi pagina</title>
                </head>
                <body>
                    <h1>Hola mundo</h1>
                    <p>Visitas: ${cantidad++}</p>
                </body>
            </html>
        `) // envia un dato al cliente
    }
    else if (request.url === '/chao') {
        response.end('Adios Mundito!')
    }
    else {
        response.end("Hola que hace...")
    }

})

server.listen(2222)