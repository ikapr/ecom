USE ecommerce_db;

INSERT INTO category (name) VALUES
	('Clothes'),
    ('Electronics'),
    ('Food');
    
INSERT INTO product (name, price, stock, category_id) VALUES
	('Black Pants', 12.99, 5, 1),
    ('iPad', 1.00, 50, 2),
    ('Banana', 99.99, 15, 3);
    
INSERT INTO tag (name) VALUES
	('Pants'),
    ('Tablets'),
    ('Fruits/Veggies');