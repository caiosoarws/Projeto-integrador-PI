const Alunos = require('./Alunos');
const Membros = require('./Membros');
const Comites = require('./Comites');

module.exports = class Tib{
    constructor(){

        this.nome = "";
        this.contato = "";
        this.comite = "";
        this.delegacao = "";
        this.justificativa = "";
    }

    setNome(n) {
        this.nome = n;
    }
        getNome() {
            return this.n;
        }

    setContato(cont) {
        this.contato = cont;
    }
        getContato() {
            return this.contato;
        }

    setComite(comite){
        this.comite = comite;
    }
        getComite(){
            return this.comite;
        }

    setDelegacao(deleg) {
        this.delegacao = deleg;
    }
        getTelefone() {
            return this.telefone;
        }

    setJustificativa(justif) {
        this.justificativa = justif;
    }
        getJustificativa() {
            return this.justificativa;
        }

inserir(connection){
    try{
        var sql = "INSERT INTO eventos (nome,telefone,delegacao,justificativa) VALUES (?,?,?,?,?); SELECT LAST_INSERT_ID()"
        
        connection.query(sql, [this.nome, this.telefone, this.delegacao, this.justificativa], 
            function(err, result) {
                if(err) throw "teste"
            });
        
        } catch (e) {
            console.error('err from callback: ' + e.stack);
            throw e;
        }
    }

listar(connection, callback) {
    var sql = "SELECT * FROM ";
    
    connection.query(sql, function (err, result) {
            if (err) throw err;
        return callback(result);
     });    
    }


pesquisar(connection, callback) {
    var sql = "SELECT * FROM tib WHERE nome like ?";

    connection.query(sql, [this.nome], function (err, result) {
		if (err) throw err;
		return callback(result);
    });    
  }
}