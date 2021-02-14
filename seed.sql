--MANGERS--

INSERT INTO manager (name)
VALUES ("Albert Rodriguez");

--DEPARTMENTS--
INSERT INTO department (name)
VALUES ("Legal");

--ROLES--
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 100000, 1);

--EMPLOYEES--
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sara", "Allston", 1, 1);