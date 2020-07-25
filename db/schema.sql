-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS supper;
-- Creates the "todolist" database --
CREATE DATABASE supper;

USE supper;

CREATE TABLE meals
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


INSERT INTO meals (title, eaten) VALUES ('Green Garlic Pizza', false);
INSERT INTO meals (title, eaten) VALUES ('Middleastern Fried Lentils and Rice', false);
INSERT INTO meals (title, eaten) VALUES ('New Mexican Green Chili Enchiladas', false);
