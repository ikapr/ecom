DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE category (
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    primary key (id)
);

CREATE TABLE product (
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 10,
    category_id INT,
    primary key (id),
    foreign key (category_id) REFERENCES category(id)
);

CREATE TABLE tag (
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    primary key (id)
);

CREATE TABLE product_tag (
	id INT NOT NULL AUTO_INCREMENT,
    product_id INT,
    tag_id INT,
    primary key (id),
    foreign key (product_id) REFERENCES product(id),
    foreign key (tag_id) REFERENCES tag(id)
);