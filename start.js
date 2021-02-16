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
    console.log = "So long for now! Don't forget to close your terminal!";
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
                if (answer.departmentChoice === "Add department") {
                    addDepartment(); 
                } else if (answer.departmentChoice === "Update department") {
                    updateDepartment();
                } else if (answer.departmentChoice === "Remove department") {
                    deleteDepartment();
                } else if (answer.departmentChoice === "Return to start") {
                    startSearch();
                } else if (answer.departmentChoice === "Exit") {
                    quitFunction();
                };
            });
        // connection.end();
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
                        name: answer.newDepartmentName
                    },
                    function (err, res) {
                        if (err) throw err;
                        console.log (answer.newDepartmentName + " department inserted");
                        connection.end(); 
                    });
                    inquirer
                        .prompt([
                            {type: 'list',
                            message: 'What do you want to do now?',
                            name: 'whatNow',
                            choices: ['Do another', 'Return to start', 'Exit']
                            }
                        ])
                        .then ((answer) => {
                            if (answer.whatNow === 'Do another') {
                                addDepartment(); 
                            } else if (answer.whatNow === 'Return to start') {
                                startSearch();
                            } else if (answer.whatNow === "Exit") {
                                quitFunction();
                            };
                        });
                    
                
            // connection.end();     
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
                if (answer.roleChoice === "Add role") {
                    addRole(); 
                } else if (answer.roleChoice === "Update role") {
                    updateRole();
                } else if (answer.roleChoice === "Remove role") {
                    deleteRole();
                } else if (answer.roleChoice === "Return to start") {
                    startSearch();
                } else if (answer.roleChoice === "Exit") {
                    quitFunction();
                };
            });
    });
};

    const addRole = () => {
        inquirer
            .prompt([
                {type: 'input',
                message: 'What is the name of your new role?',
                name: 'newRoleName'
                },
                {type: 'number',
                message: 'What is the yearly salary for the new role? (using numbers, i.e. 1234)',
                name: 'newRoleSalary'
                }
            ])
            .then ((answer) => {
                const newRole = 'INSERT INTO role SET ?';
                connection.query(newRole,
                    {
                        title: answer.newRoleName,
                        salary: answer.newRoleSalary
                    },
                    function (err, res) {
                        if (err) throw err;
                        console.log (answer.newRoleName + " role inserted");
                        connection.end(); 
                    });
                    inquirer
                        .prompt([
                            {type: 'list',
                            message: 'What do you want to do now?',
                            name: 'whatNow',
                            choices: ['Do another', 'Return to start', 'Exit']
                            }
                        ])
                        .then ((answer) => {
                            if (answer.whatNow === 'Do another') {
                                addRole(); 
                            } else if (answer.whatNow === 'Return to start') {
                                startSearch();
                            } else if (answer.whatNow === "Exit") {
                                quitFunction();
                            };
                        });
                    
                
            // connection.end();     
            })
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
                    if (answer.employeeChoice === "Add employee") {
                        addEmployee(); 
                    } else if (answer.employeeChoice === "Update employee") {
                        updateEmployee();
                    } else if (answer.employeeChoice === "Remove employee") {
                        deleteEmployee();
                    } else if (answer.employeeChoice === "Return to start") {
                        startSearch();
                    } else if (answer.employeeChoice === "Exit") {
                        quitFunction();
                    };
                });
        // connection.end();
    });
};

    const addEmployee = () => {
        inquirer
            .prompt([
                {type: 'input',
                message: 'What is the name of your new employee?',
                name: 'newEmployeeFirstName'
                },
                {
                    type: 'input',
                    message: 'What is their last name?',
                    name: 'newEmployeeLastName'
                }
            ])
            .then ((answer) => {
                const newEmployee = 'INSERT INTO employee SET ?';
                connection.query(newEmployee,
                    {
                        first_name: answer.newEmployeeFirstName,
                        last_name: answer.newEmployeeLastName
                    },
                    function (err, res) {
                        if (err) throw err;
                        console.log (answer.newEmployeeFirstName + " " + answer.newEmployeeLastName + " employee inserted");
                        connection.end(); 
                    });
                    inquirer
                        .prompt([
                            {type: 'list',
                            message: 'What do you want to do now?',
                            name: 'whatNow',
                            choices: ['Do another', 'Return to start', 'Exit']
                            }
                        ])
                        .then ((answer) => {
                            if (answer.whatNow === 'Do another') {
                                addRole(); 
                            } else if (answer.whatNow === 'Return to start') {
                                startSearch();
                            } else if (answer.whatNow === "Exit") {
                                quitFunction();
                            };
                        });
                    
                
            // connection.end();     
            })
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
