CREATE TABLE User (
    id INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    user VARCHAR (100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE leitura (
    id INT AUTO_INCREMENT,
    temperatura FLOAT NOT NULL,
    umidade FLOAT NOT NULL,
    momento DATETIME NOT NULL,
    PRIMARY KEY(id)
);
