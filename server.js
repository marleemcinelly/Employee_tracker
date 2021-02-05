var mysql = require("mysql");
var inquirer = require("inquire");

const connection = mysql.createConnection({
    host: "localhost",
    post: 3306,
    user: 'root',
    password: 'DildoBumper18*',
    database: 'company_db'
});

const afterConnection = () => {
    connection.query('SELECT * FROM products', (err, res) => {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
};

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
});

inquirer
    .prompt([
        {
            type: 'choice',
            message: '',
            name: '',
            choice: []
        },
        {
            type: 'choice',
            message: '',
            name: '',
            choice: []
        },
    ])