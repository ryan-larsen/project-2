DROP DATABASE IF EXISTS foodFight_db;
CREATE database foodFight_db;

USE foodFight_db;

CREATE TABLE mealoptions(
    id INT NOT NULL AUTO_INCREMENT,
    member_id VARCHAR (300) NOT NULL,
    meals VARCHAR NOT NULL,
    created_at DECIMAL NOT NULL,
    votes INT AUTO_INCREMENT
    PRIMARY KEY(id)
    
);