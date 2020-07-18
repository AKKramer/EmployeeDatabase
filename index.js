const connection = require('./connection.js');
const emp = require('./employee.js');
const inquirer = require("inquirer");



class db {
    constructor(connection){
        this.connection = connection;
    }

    getEmployees(){
        return connection.query("SELECT first_name, last_name FROM employee")
    }

    getDepartments(){
        return connection.query("SELECT name FROM department")
    }

    getRoles(){
        return connection.query("SELECT title, salary, department_id FROM role")
    }


    addEmployees(values){ 
            console.log(values)
            const queryString = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ?? ?? ?? ??)`;
        
            return this.connection.query(queryString, [values])
        

        // inquirer.prompt(addEmployee)
        // .then(async(selection) => {
        //     return connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Olive', 'Cline', 1, NULL)
            
        //     // "SELECT first_name, last_name FROM employee WHERE role_id = 1"


        // })

        

        // .then(results => {valuesOnly = Object.values(JSON.stringify(results))}
        // )
        // console.log(valuesOnly)
        
        // return connection.query("SELECT CONCAT_WS(' ', first_name, last_name) FROM employee WHERE role_id = 1")

        // addEmployee[3].choices = results.RowDataPacket

        // console.table("SELECT first_name, last_name FROM employee WHERE role_id = 1")
        
         

        
        // .then(async(results) => {
        
            // SELECT first_name, last_name FROM employee WHERE role_id = 1


        // addEmp(table, columns, values){
        //     const queryString = `INSERT INTO employee () VALUES (${this.printQuestionMarks(values.length, 'vals')})`;
        
        //     return this.connection.query(queryString, [table, ...values])
        //   }
        
        
        
        
        // connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Olive', 'Cline', 1, NULL);")
        
    }



}

module.exports = new db(connection)