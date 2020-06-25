INSERT INTO burgers (burger_name) 
VALUES 
('Animal Style'),
('4x4 Burger'),
('Flying Dutchman');

SELECT * FROM burgers;

INSERT INTO burgers (burger_name) VALUES ('ShackBurger');

UPDATE burgers SET burger_name = 'Jucy Lucy' WHERE id=3;

UPDATE burgers SET devoured = true WHERE id=5;
