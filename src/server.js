const express = require('express')

class Server {

    constructor(app = express()) {
        this.port = 3000
        this.middlewares(app)
        this.home(app)
        this.startServer(app)
    }

    async middlewares(app) {
        app.use(express.json())

    }

    async home(app) {
        app.get('/', (req, res) => {
            res.status(200).send('Servidor respondendo o método get...')
        })
    }

    async startServer(app) {
        app.listen(this.port, () => {
            console.log('Servidor rodando em  http://localhost:3000')
        })
    }

}

module.exports = { Server }