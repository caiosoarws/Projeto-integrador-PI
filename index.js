

///////////////////// BASICO ////////////////////////
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));

app.listen(3000, function() {
    console.log('Servidor no ar - Porta: 3000!')
});

const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var mysql = require('mysql');
const Tib = require('./models/TIB');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CRI"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Banco de dados conectado!");
});

app.post('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/alunos', function (req, res) {
    res.sendFile(__dirname + '/views/Alunos/alunos.html');
});

app.get('/cargos', function (req, res) {
    res.sendFile(__dirname + '/views/Cargos/cargos.html');
});

app.get('/comites', function (req, res) {
    res.sendFile(__dirname + '/views/Comites/comites.html');
});

app.get('/voltar', function(req, res){
	res.sendFile(__dirname + '/views/TIB.html');
});




/////////////////////////// FUNÇÕES TIB////////////////////////////

app.get('/tib', function (req, res) {
    res.sendFile(__dirname + '/views/TIB/tib.html');
});

app.get('/inscricaoTIB', function(req, res){
	
	var t = new Tib();  
    t.listar(con, function(result){
		res.render('TIB/lista.ejs', {tib: result});
	});
	  
});

app.get('/formTIB', function(req, res){
	res.sendFile(__dirname + '/views/TIB/formTIB.html');
});

app.post('/filtrarAlunoTIB', function(req, res){
	var tib = new Tib();
	tib.setNome(req.body.nome);
	
	if (tib.getNome() == '') {
		tib.setNome('%');
	}
	
	tib.pesquisar(con, function(result){
		res.render('views/TIB/lista.ejs', {tib: result});
	});
});

app.get('/formTIB', function(req, res){
	res.sendFile(__dirname + '/views/TIB/formTIB.html');
});

app.post('/salvarTIB', function(req, res){

	try{
		var tib = new Tib();

		tib.setNome(req.body.nome);
		tib.setContato(req.body.contato);
		tib.setComite(req.body.comite);
		tib.setDelegacao(req.body.delegacao);
		tib.setJustificativa(req.body.justificativa);

		var retorno = tib.inserir(con);
		console.log('Aqui: '+ retorno);
	} catch (e) {
		console.log('Erro: ' +e.message);
	}
})
//////////////////////// FUNÇÕES MIFRES //////////////////////

app.get('/mifres', function (req, res) {
    res.sendFile(__dirname + '/views/MIFRes/mifres.html');
});

app.get('/inscricaoMIFRES', function(req, res){
	
	var mf = new Mifres();  
    mf.listar(con, function(result){
		res.render('MIFRes/lista.ejs', {mifres: result});
	});
	  
});

app.get('/formMifres', function(req, res){
	res.sendFile(__dirname + '/views/MIFRes/inscricaoMIFRES.html');
});

app.post('/filtrarAlunoMifres', function(req, res){
	var mf = new Mifres();
	mf.setNome(req.body.nome);
	
	if (mf.getNome() == '') {
		mf.setNome('%');
	}
	
	mf.pesquisar(con, function(result){
		res.render('views/MIFRes/lista.ejs', {mifres: result});
	});
});

app.post('/salvarMifres', function(req, res){

	try{
		var mf = new Mifres();

		mf.setNome(req.body.nome);
		mf.setEscolas(req.body.escola);
		mf.setAno(req.body.ano);
		mf.setTelefone(req.body.telefone);
		mf.setComite(req.body.comite);
		mf.setDelegacao(req.body.delegacao);
		mf.setJustificativa(req.body.justificativa);

		var retorno = mf.inserir(con);
		console.log('Aqui: '+ retorno);
	} catch (e) {
		console.log('Erro: ' +e.message);
	}
})