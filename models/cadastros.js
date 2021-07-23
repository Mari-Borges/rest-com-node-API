const axios = require('axios')
const moment  = require('moment')
const cadastro = require('../controllers/cadastro')
const conexao = require('../infraestrutura/conexao')

class Cadastro {
    adiciona(cadastro, res){
        const data = new Date()
        const datacadastro = {... cadastro, data}
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, datacadastro, (erro, resultados) => {
            if (erro){
                res.status(400).json(erro)
            }else {
                res.status(201).json(cadastro)
            }
        })

    }
    list(res){
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }else {
                res.status(200).json(resultados)
            }
        })

    }
    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, async (erro, resultados) =>{
            const cadastro = resultados [0]
            const cpf = cadastro.nmcompleto
            if(erro){
                res.status(400).json(erro)
            }else {
                const { data } = await axios.get(`http://localhost:8082/${cpf}`)
                cadastro.nmcompleto = data
                res.status(200).json(cadastro)
            }
        })
    }
    alterar(id, valores, res){
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else {
                res.status(200).json({...valores, id})
            }
        })
    }
    delete(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
}
module.exports = new Cadastro