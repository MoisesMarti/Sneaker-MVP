--DROP TABLE IF EXISTS user_table;
-- DROP TABLE IF EXISTS sneakers_Table;

CREATE TABLE user_table (
    persons_id serial,
    notes text
);
INSERT INTO user_table (notes) VALUES ('Moises');
--INSERT INTO user_table (notes) VALUES ('Caleb');


-- CREATE TABLE sneakers_Table (
--   sneakers_id serial PRIMARY KEY,
--   sneaker_name VARCHAR,
--   persons_id INTEGER REFERENCES user_Table(persons_id) ON DELETE CASCADE
-- );


--PersonID int FOREIGN KEY REFERENCES Persons(PersonID)