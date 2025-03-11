create database estacionamento;
use estacionamento;

create table carros(
	id int primary key auto_increment unique,
    marca varchar(255),
    modelo varchar(255),
    placa varchar(7) not null unique,
    cpf int not null,
    vaga_preferencial enum("cadeirante", "gestante", "idoso","deficiente", "comum") not null default("comum")
    
);

create table usuario(
	id int primary key auto_increment unique,
    nome varchar(255),
    senha varchar(255),
    cpf int not null
);