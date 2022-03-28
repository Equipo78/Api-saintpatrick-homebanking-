drop database banco_saint_patrick_db;

CREATE DATABASE IF NOT EXISTS banco_saint_patrick_db;

USE banco_saint_patrick_db;


CREATE SEQUENCE table_banks increment by 1  start 1;
CREATE SEQUENCE table_accounts increment by 1  start 1;
CREATE SEQUENCE table_cards increment by 1  start 1;
CREATE SEQUENCE table_types increment by 1  start 1;
CREATE SEQUENCE table_transactions increment by 1  start 1;
CREATE SEQUENCE table_movements increment by 1  start 1;
CREATE SEQUENCE table_users increment by 1  start 1;


CREATE TABLE IF NOT EXISTS public.banks(
	id INT  NOT NULL PRIMARY key default nextval('table_banks'),
    name VARCHAR(50) NOT NULL,
    branch_office VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    cuit int UNIQUE
); 

CREATE TABLE IF NOT EXISTS banks(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    branch_office VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    cuit BIGINT(15) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS accounts(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nro_account BIGINT UNIQUE NOT NULL,
    balance BIGINT NOT NULL,
    id_bank INT UNSIGNED,
    FOREIGN KEY(id_bank) REFERENCES banks(id)
);

CREATE TABLE IF NOT EXISTS cards(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nro_card BIGINT(16) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    due_date DATE NOT NULL,
    cod VARCHAR(50) NOT NULL,
    pin INT(4) NOT NULL,
    id_account INT UNSIGNED,
    FOREIGN KEY(id_account) REFERENCES accounts(id)
);

CREATE TABLE IF NOT EXISTS types(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(100) NOT NULL,
    cod VARCHAR(50)
);


CREATE TABLE IF NOT EXISTS transactions(
	nro_operation INT NOT NULL PRIMARY KEY,
    description VARCHAR(100) NOT NULL,
    amount INT NOT NULL,
    id_card_transmitter INT UNSIGNED,
    id_account_transmitter INT UNSIGNED,
    id_card_receiver INT UNSIGNED,
    id_account_receiver INT UNSIGNED,
    id_type INT UNSIGNED,
    FOREIGN KEY(id_card_transmitter) REFERENCES cards(id),
    FOREIGN KEY(id_card_receiver) REFERENCES cards(id),
    FOREIGN KEY(id_account_transmitter) REFERENCES accounts(id),
    FOREIGN KEY(id_account_receiver) REFERENCES accounts(id),
    FOREIGN KEY(id_type) REFERENCES types(id)
);

CREATE TABLE IF NOT EXISTS movements(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    entry INT NOT NULL,
    egress INT NOT NULL,
    description VARCHAR(100) NOT NULL,
    id_account INT UNSIGNED,
    operation INT ,
    FOREIGN KEY(id_account) REFERENCES accounts(id),
    FOREIGN KEY(operation) REFERENCES transactions(nro_operation)
);


create table IF NOT EXISTS users (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    dni BIGINT UNIQUE NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    password VARCHAR(80) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    id_account INT UNSIGNED,
    FOREIGN KEY(id_account) REFERENCES accounts(id)
);

