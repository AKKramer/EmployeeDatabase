DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INTEGER(11),
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER(11),
  manager_id INTEGER(11),
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);



-- SELECT * FROM authors;
-- SELECT * FROM books;

-- show ALL books with authors
-- INNER JOIN will only return all matching values from both tables
-- SELECT title, firstName, lastName, body
-- FROM books
-- INNER JOIN authors ON books.authorId = authors.id
-- INNER JOIN notes ON books.id = notes.bookId
-- ;

-- show ALL books, even if we don't know the author
-- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
-- SELECT title, firstName, lastName
-- FROM authors LEFT JOIN books 
-- ON books.authorId = authors.id;

-- show ALL books, even if we don't know the author
-- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
-- SELECT title, firstName, lastName
-- FROM books
-- RIGHT JOIN authors ON books.authorId = authors.id;

/*
  1) Create notes table
    a) Auto increment id
    b) body column
    c) booksId column
    d) primary key
    e) foreign key
  2) Insert data into the notes table
  3) Perform a sql join on books with notes
  4) BONUS: Look up how to perform a sql join on 3 tables.
*/