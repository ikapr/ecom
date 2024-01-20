USE ecommerce_db;

INSERT INTO category (name) VALUES
	('Shirts'),
	('Shorts'),
	('Music'),
	('Hats'),
	('Shoes'),
	('Movies'),
	('Electronics'),
	('Food');
    
INSERT INTO product (name, price, stock, category_id) VALUES
	('Plain T-Shirt', 14.99, 14, 1),
	('Running Sneakers', 90.0, 25, 5),
	('Branded Baseball Hat', 22.99, 12, 4),
	('Top 40 Music Compilation Vinyl Record', 12.99, 50, 3),
	('Cargo Shorts', 29.99, 22, 2),
	('Black Pants', 12.99, 5, 2),
    ('iPad', 1.00, 50, 7),
    ('Banana', 99.99, 15, 8);
    
INSERT INTO tag (name) VALUES
	('rock music'),
	('pop music'),
	('blue'),
	('red'),
	('green'),
	('white'),
	('gold'),
	('pop culture'),
	('pants'),
    ('tablets'),
    ('fruits/veggies');
    
INSERT INTO product_tag (product_id, tag_id) VALUES
	(1,6),
	(1,7), 
	(1,8), 
	(2,6), 
	(3,1), 
	(3,3), 
	(3,4), 
	(3,5),
	(4,1),
	(4,2),
	(4,8),
	(5,3);