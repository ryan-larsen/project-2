DROP database IF EXISTS userDb;

CREATE DATABASE userDb;

USE userDb;

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL,
    username VARCHAR (255) NOT NULL,
	password VARCHAR(255) NOT NULL,
  	createdAt  DATETIME,
    updatedAt DATETIME,
  	PRIMARY KEY(id)
)