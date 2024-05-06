create database laboratorio;
use laboratorio;


create table productos(
id bigint not null auto_increment primary key,
nombre varchar(20) not null,
cantidad int not null
);

create table reactivos(
id bigint not null auto_increment primary key,
nombre varchar(20) not null,
cantidad int not null
);