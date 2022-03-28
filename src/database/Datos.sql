INSERT INTO banks
VALUES(default,"Saint Patrick", "Córdoba", "9 de Julio 700", 20658973694),(default,"Saint Patrick", "Buenos Aieres", "San Martín 400", 65321654583), (default,"Banco Galicia", "Córdoba", "9 de Julio 710", 10362545267);


INSERT INTO accounts
VALUES(default, 56897123694, 40000, 1),(default, 4569873612, 0, 2);

INSERT INTO cards
VALUES(default, 5365669900001111, "Matias Gonzales",2026-06-01, 000, 1234, 1),(default, 00001111222233334444, "Susana Rodriguez",2026-06-01, 000, 1234, 2);

INSERT INTO types
VALUES(default, "Transferencia", null), (default, "Pago", null);

INSERT INTO transactions
VALUES(23654869, "Pago de servicios", 40000, 2, 2, 1, 1, 2);


INSERT INTO movements
VALUES(default, 40000, 0, "Transferencia por pago de servicios", 1, 23654869);

INSERT INTO users
VALUES(default, "Matias", "Gonzales", 23654789, "Matias123","$2a$10$KC0zK4y84xkdYu0/0iks2uFaTm5SNzugHXMsEkHdLoOKUp2yNKGzu", "matiasGonzales@gmail.com", 1),
(default, "Susana", "Rodriguez", 25654321, "Susana123", "123456", "susanaRodriguez@gmail.com", 2);

