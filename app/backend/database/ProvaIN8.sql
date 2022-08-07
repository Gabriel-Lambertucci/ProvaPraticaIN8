DROP SCHEMA IF EXISTS provain8_db;
CREATE SCHEMA IF NOT EXISTS provain8_db;

create table provain8_db.users 
(id int PRIMARY KEY AUTO_INCREMENT,nome varchar(50), email varchar(50), nascimento varchar(50), telefone varchar(50));