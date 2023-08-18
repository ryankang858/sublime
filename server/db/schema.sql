DROP DATABASE IF EXISTS sublime_db;

CREATE DATABASE sublime_db;

USE sublime_db;

CREATE TABLE comments (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
comment LONGTEXT NOT NULL,
topic VARCHAR(30) NOT NULL,
date DATE NOT NULL
);

SELECT * FROM comments;

INSERT INTO comments (name, comment, topic, date)
VALUES
("Anonymous", "I play sports to relieve stress and get away from my thoughts, but the pressures of being an athlete sometimes stress me even more. Any way out???", "Sports", "2023-06-22"),
("John Doe", "WHY IS GAMING SO HATED WHEN EVERYONE LOVES GAMES?!?!?!?!", "Gaming", "2023-06-23"),
("Anonymous", "Is happiness generated through music instigated by making music personally or hearing music in general?", "Music", "2023-06-24");
