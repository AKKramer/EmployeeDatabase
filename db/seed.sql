USE employee_db;

INSERT INTO department (name) values ('Sales');
INSERT INTO department (name) values ('Engineering');
INSERT INTO department (name) values ('QC');
INSERT INTO department (name) values ('IT Support');

INSERT INTO role (title, salary, department_id) values ('Sales Manager', 80000, 1);
INSERT INTO role (title, salary, department_id) values ('Sales Consultant', 50000, 1);
INSERT INTO role (title, salary, department_id) values ('Engineering Manager', 80000, 2);
INSERT INTO role (title, salary, department_id) values ('Power Plant Engineer', 75000, 2);
INSERT INTO role (title, salary, department_id) values ('QC Specialist', 55000, 3);
INSERT INTO role (title, salary, department_id) values ('QC Auditor', 60000, 3);
INSERT INTO role (title, salary, department_id) values ('IT Manager', 80000, 4);
INSERT INTO role (title, salary, department_id) values ('IT Helpdesk Consultant', 45000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Olive', 'Cline', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Brooklyn', 'Bush', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Eve', 'Ryan', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Kameron', 'King', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Isabela', 'Flowers', 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Gemma', 'Nunez', 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Leroy', 'Aguirre', 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Freddy', 'Calderon', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Parker', 'Vega', 8, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Charlie', 'Kirby', 8, 8);