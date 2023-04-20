CREATE DATABASE IF NOT EXISTS login_node_jwt;

USE login_node_jwt;

-- TABLE USER
-- all pasword wil be encrypted using SHA2
CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  user VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  pass VARCHAR(60) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE devices (
  id_device INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  marca VARCHAR(100) NOT NULL,
  modelo VARCHAR(100) NOT NULL,
  tipo VARCHAR(60) NOT NULL,
  fk_deviceuser INT NOT NULL
  );

-- FK de la tabla Dispositivos con Users
ALTER TABLE devices ADD FOREIGN KEY (fk_deviceuser) REFERENCES users(id);

INSERT INTO devices (marca, modelo, tipo, fk_deviceuser) VALUES
("Iphone", "Iphone 11", "Celular", 6);

SELECT * FROM devices;

describe users;
SELECT * FROM users;