DROP DATABASE CRI;
create database CRI;
use CRI;

create table membros (
	membros_id int auto_increment,
    nome varchar(100) NOT NULL,
	turma varchar(10),
	telefone int(9) NOT NULL,
	email varchar(100) NOT NULL,
    escola varchar(100),
	PRIMARY KEY(membros_id)
);

CREATE TABLE cargos (
    cargos_id INT AUTO_INCREMENT,
    presidente VARCHAR(45) NOT NULL,
    vice_presidente VARCHAR(45) NOT NULL,
    financeiro VARCHAR(45),
    comunicacao VARCHAR(45),
    designerDeSimulacao VARCHAR(45),
    PRIMARY KEY (cargos_id),
    FOREIGN KEY (membros_id)
        REFERENCES membros (membros_id)
);

create table escolas (
	escolas_id int auto_increment,
	escola varchar(100) NOT NULL,
	endereco varchar(100),
	PRIMARY KEY(escolas_id)
);

create table alunos (
	alunos_id int auto_increment,
	nome varchar(100),
	turma varchar(30),
	telefone int(9),
	email varchar(100),
	curso varchar(100) NULL,
	endereco varchar(100),
	escola varchar(100),
	PRIMARY KEY(alunos_id),
    FOREIGN KEY(escolas_id) REFERENCES escolas(escolas_id),
    FOREIGN KEY(comites_id) REFERENCES comites(comites_id)
);

create table comites (
	comites_id int auto_increment,
    delegados varchar(45),
    temas varchar(45),
    mesas varchar(45),
    PRIMARY KEY(comites_id),
    FOREIGN KEY(escolas_id) REFERENCES escolas(escolas_id),
    FOREIGN KEY(orgaos_id) REFERENCES orgaos(orgaos_id)
);

create table orgaos (
	orgaos_id int auto_increment,
    CDH varchar(100),
    CNUDH varchar(100),
    ACNUR varchar(100),
    CSNU varchar(100),
    OEA varchar(100),
    OMS varchar(100),
    AC varchar(100),
    Gabinete varchar(100),
    PRIMARY KEY(orgaos_id),
    FOREIGN KEY(comites_id) REFERENCES comites(comites_id)
);

create table MIFRes (
	alunos_id int auto_increment,
	nome varchar(100) NOT NULL,
	escola varchar(100) NOT NULL,
	ano int (10) NOT NULL,
	telefone int(9) NOT NULL,
	comite varchar(50) NOT NULL,
	delegacao varchar(100) NOT NULL,
	justificativa varchar(100) NOT NULL,
	PRIMARY KEY(mifres_id),
    FOREIGN KEY(escolas_id) REFERENCES escolas(escolas_id),
    FOREIGN KEY(comites_id) REFERENCES comites(comites_id)
);

create table tib (
	tib_id int auto_increment,
	nome varchar(100) NOT NULL,
	contato int(13) NOT NULL,
	comite varchar (50) NOT NULL,
	delegacao varchar(100) NOT NULL,
	justificativa varchar(100) NOT NULL,
	PRIMARY KEY(tib_id),
	FOREIGN KEY(comites_id) REFERENCES comites(comites_id),
	FOREIGN KEY(alunos_id) REFERENCES alunos(alunos_id)
);

create table alunosMIFRES (
	alunos_id int auto_increment,
	nome varchar(100),
	turma varchar(30),
	telefone int(9),
	email varchar(100),
	curso varchar(100) NULL,
	endereco varchar(100),
	escola varchar(100),
	PRIMARY KEY(alunos_id),
    FOREIGN KEY(escolas_id) REFERENCES escolas(escolas_id),
    FOREIGN KEY(comites_id) REFERENCES comites(comites_id)
);

CREATE USER 'root'@'localhost' IDENTIFIED BY '';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
