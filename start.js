var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    post: 3306,
    user: 'root',
    password: '99!NoteTakerPass',
    database: 'company_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    startSearch();
});

const quitFunction = () => {
    connection.end();
}


function departmentDisplay() {
    const departmentQuery = 'SELECT id, name FROM department';
    connection.query(departmentQuery, function(err, res){
        if (err) throw err;
        console.log(res);
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'What would you like to do?',
                    name: 'departmentChoice',
                    choices: ["Add department", "Update department", "Remove department", "Return to start", "Exit"]
                }
            ])
            .then((answer) => {

                if ((answer) => answer.choice == "Add department") {
                    addDepartment();
                } else if ((answer) => answer.choice == "Update department") {
                    updateDepartment();
                } else if ((answer) => answer.choice == "Remove department") {
                    deleteDepartment();
                } else if ((answer) => answer.choice == "Return to start") {
                    startSearch();
                } else if ((answer) => answer.choice == "Exit") {
                    quitFunction();
                }
            });
        connection.end();
    });
};

    const addDepartment = () => {
        
            inquirer
                .prompt([
                    {type: 'input',
                    message: 'What is the name of your new department?',
                    name: 'newDepartmentName'
                    }
                ])
                .then ((answer) => {
                    const newDepartment = 'INSERT INTO department SET ?';
                    connection.query(newDepartment,
                        { 
                            id: 'INTEGER NOT NULL AUTO_INCREMENT',
                            name: answer.newDepartmentName
                        },
                        function (err, res) {
                            if (err) throw err;
                            console.log (res + " department inserted");
                            connection.end(); 
                        }
                        
                    );
                connection.end();     
                })
               
    };

    const deleteDepartment = () => {
        console.log("Deletion feature is a work in progress, please check back later");
    };

    const updateDepartment = () => {
        console.log("Update feature is a work in progress, please check back later");
    };

function roleDisplay () {
    const roleQuery = 'SELECT * FROM role';
    connection.query(roleQuery, function(err, res) {
        if (err) throw err;
        console.log(res);
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'What would you like to do?',
                    name: 'roleChoice',
                    choices: ["Add role", "Update role", "Remove role", "Return to start", "Exit"]
                }
            ])
            .then((answer) => {

                if ((answer) => answer.choice == "Add role") {
                    addRole();
                } else if ((answer) => answer.choice == "Update role") {
                    updateRole();
                } else if ((answer) => answer.choice == "Remove role") {
                    deleteRole();
                } else if ((answer) => answer.choice == "Return to start") {
                    startSearch();
                } else if ((answer) => answer.choice == "Exit") {
                    quitFunction();
                }
            });
    });
};

    const addRole = () => {
        console.log("Addition feature is a work in progress, please check back later");
    };

    const deleteRole = () => {
        console.log("Deletion feature is a work in progress, please check back later");
    };

    const updateRole = () => {
        console.log("Update feature is a work in progress, please check back later");
    };

function employeeDisplay () {
    const employeeQuery = 'SELECT * FROM employee';
    connection.query(employeeQuery, function(err, res) {
        if (err) throw err;
        console.log(res);
        inquirer
                .prompt([
                    {
                        type: 'list',
                        message: 'What would you like to do?',
                        name: 'employeeChoice',
                        choices: ["Add employee", "Update employee", "Remove employee", "Return to start", "Exit"]
                    }
                ])
                .then((answer) => {
                
                    if ((answer) => answer.choice == "Add employee") {
                        addEmployee();
                    } else if ((answer) => answer.choice == "Update employee") {
                        updateEmployee();
                    } else if ((answer) => answer.choice == "Remove employee") {
                        deleteEmployee();
                    } else if ((answer) => answer.choice == "Return to start") {
                        startSearch();
                    } else if ((answer) => answer.choice == "Exit") {
                        quitFunction();
                    }
                });
        connection.end();
    });
};

    const addEmployee = () => {
        console.log("Addition feature is a work in progress, please check back later");
    };

    const deleteEmployee = () => {
        console.log("Deletion feature is a work in progress, please check back later");
    };

    const updateEmployee = () => {
        console.log("Update feature is a work in progress, please check back later");
    };

    function startSearch(){
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'What would you like to do?',
                    name: 'choice1',
                    choices: [
                        "View all departments",
                        "View all roles",
                        "View all employees", 
                        "Exit",]
                }
            ])
        .then((answer) => {
            if (answer.choice1 === "View all departments") {
                departmentDisplay(); 
            } else if (answer.choice1 === "View all roles") {
                roleDisplay();
            } else if (answer.choice1 === "View all employees") {
                employeeDisplay();
            } else if (answer.choice1 === "Exit") {
                quitFunction();
            };
        });
    };
