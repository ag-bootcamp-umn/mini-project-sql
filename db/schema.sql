DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  author VARCHAR(30) NOT NULL,
  description TEXT,
  movie_id INT,  
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
  ON DELETE SET NULL
);