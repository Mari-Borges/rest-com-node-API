const Cadastro = require('../models/cadastros')

module.exports = app => {
    app.get('/cadastro', (req, res)=> {
        Cadastro.list(res)
        
    })    

    app.get('/cadastro/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Cadastro.buscaPorId(id, res)

    })

    app.post('/cadastro', (req, res) => {
        const cadastro = req.body

        Cadastro.adiciona(cadastro, res)
    })

    app.patch('/cadastro/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        const valores = req.body

        Cadastro.alterar(id, valores, res)

    })

    app.delete('/cadastro/:id', (req, res) =>{
        const id = parseInt(req.params.id)

        Cadastro.delete(id, res)
    })
}