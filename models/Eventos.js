const Alunos = require('./Alunos');
const Membros = require('./Membros');
const Comites = require('./Comites');

module.exports = class Eventos {
    constructor() {

        this.nome = "";
        this.escolas = "";
        this.ano = "";
        this.contato = "";
        this.comite = "";
        this.delegacao = "";
        this.justificativa = "";
    }

    setNome(nom) {
        this.nome = nom;
    }
    getNome() {
        return this.nome;
    }

    setEscolas(esc) {
        this.escolas = esc;
    }
    getEscolas() {
        return this.escolas;
    }

    setAno(ano) {
        this.ano = ano;
    }
    getAno() {
        return this.ano;
    }

    setTelefone(tel) {
        this.telefone = tel;
    }
    getTelefone() {
        return this.telefone;
    }

    setComite(com) {
        this.comite = com;
    }
    getComite() {
        return this.comite;
    }

    setDelegacao(deleg) {
        this.delegacao = deleg;
    }
    getDelegacao() {
        return this.delegacao;
    }

    setJustificativa(jus) {
        this.justificativa = jus;
    }
    getJustificativa() {
        return this.justificativa;
    }

    inserir(connection) {
        try {
            var sql = "INSERT INTO eventos (nome,escolas,ano,telefone,comite,delegacao,justificativa) VALUES (?,?,?,?,?,?,?)"

            connection.query(sql, [this.nome, this.escolas, this.ano, this.telefone, this.comite, this.delegacao, this.justificativa],
                function (err, result) {
                    if (err) throw "teste"
                });

        } catch (e) {
            console.error('err from callback: ' + e.stack);
            throw e;
        }
    }
    

listar(connection, callback) {
    var sql = "SELECT * FROM eventos ";

    connection.query(sql, function (err, result) {
        if (err) throw err;
        return callback(result);
    });
}


pesquisar(connection, callback) {
    var sql = "SELECT * FROM eventos WHERE nome like ?";

    connection.query(sql, [this.nome], function (err, result) {
        if (err) throw err;
        return callback(result);
    });
}
}