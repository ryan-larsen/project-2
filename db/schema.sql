DROP database IF EXISTS userDb;

CREATE DATABASE userDb;

<<<<<<< HEAD
=======
CREATE DATABASE userDb;

>>>>>>> ff98071133cadca47b404ff0dce93b9d2dae794f
USE userDb;

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
<<<<<<< HEAD
	email VARCHAR(255) NOT NULL,
    username VARCHAR (255) NOT NULL,
	password VARCHAR(255) NOT NULL,
  	createdAt  DATETIME,
    updatedAt DATETIME,
  	PRIMARY KEY(id)
)
=======
	email VARCHAR( 255 ) NOT NULL,
	username VARCHAR( 255 ) NOT NULL
	password VARCHAR( 255 ) NOT NULL,
  	createdAt  DATETIME,
    updatedAt DATETIME,
  	PRIMARY KEY( id )
);

CREATE TABLE posts
(
	id INT NOT NULL AUTO_INCREMENT,
	meal VARCHAR( 255 ) NOT NULL,
	createdAt DATETIME,
	votes INT,
  	PRIMARY KEY( id )
);
>>>>>>> ff98071133cadca47b404ff0dce93b9d2dae794f
