class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarAtendimento()
    }

    criarAtendimento(){

        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, nmcompleto varchar(50) NOT NULL, dsEspecialidade varchar(20) NOT NULL, data datetime, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('tabela atendimento criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas