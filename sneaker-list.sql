DROP TABLE IF EXISTS user_Table;
DROP TABLE IF EXISTS sneakers_Table;

CREATE TABLE user_Table (
    persons_id serial PRIMARY KEY,
    name VARCHAR,
    size INTEGER
);
INSERT INTO user_Table (name,size) VALUES ('Moises',9);
INSERT INTO user_Table (name,size) VALUES ('Caleb',13);


CREATE TABLE sneakers_Table (
  sneakers_id serial PRIMARY KEY,
  sneaker_name VARCHAR,
  persons_id INTEGER REFERENCES user_Table(persons_id) ON DELETE CASCADE
);


--PersonID int FOREIGN KEY REFERENCES Persons(PersonID)