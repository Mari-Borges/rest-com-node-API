class Tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarAtendimento()
        this.criarPets()

    }

    criarAtendimento(){

        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, nmcompleto varchar(11) NOT NULL, dsEspecialidade varchar(20) NOT NULL, data datetime, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela atendimento criada com sucesso')
            }
        })
    }

    criarPets(){
        const sql = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(1000), PRIMARY KEY (id))'

        this.conexao.query(sql, erro => {
            if(erro){

                console.log(erro)
            }else {
                console.log('Tabela pets criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas