CREATE DATABASE crud_js;

USE crud_js;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    done BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (title, done) VALUES 
("Criar o front end", false),
("Criar o back end", false),
("Conectar front com back", false);

select * from tasks;

truncate tasks;