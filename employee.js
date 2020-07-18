const inquirer = require("inquirer");
const db = require('./index');
const { addEmployees } = require("./index");

// function getEmployees(){
//     return db.getEmployees()
//      .then(response => response)
//      .catch(err => err)
//  }



const mainMenu = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'option',
        choices: [
        'View All Employees', 
        'View All Departments', 
        'View All Roles',
        'Add Employee',
        'Remove Employee',
        'Update Employee Role',
        'Update Employee Manager'
        ]
    }
]

const addEmployee = [
    {
      type: "input",
      message: "What is the employee's first name?",
      name: "firstName"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName"
    },
    {
        type: 'input',
        message: "What is this employee's role?",
        name: 'role',
        // choices: [
        // 'DYNAMIC',   //TODO:
        // ]
    },
    {
        type: 'input',
        message: "Who is this employee's manager?",
        name: 'manager',
        // choices: [
        // 'DYNAMIC',   //TODO:
        // ]
    },
]

const removeEmployee = [
    {
        type: 'list',
        message: "Which employee would you like to remove",
        name: 'option',
        choices: [
        'removeEmployee',   //TODO:
        ]
    },
]

const updateRole = [
    {
        type: 'list',
        message: "Which employee would you like to update",
        name: 'option',
        choices: [
        'Employee Name',   //TODO:
        ]
    },
    {
        type: 'list',
        message: "What role does this employee have?",
        name: 'option',
        choices: [
        'Employee Role',   //TODO:
        ]
    },
]

const updateManager = [
    {
        type: 'list',
        message: "Which employee would you like to update",
        name: 'option',
        choices: [
        'Employee Name',   //TODO:
        ]
    },
    {
        type: 'list',
        message: "Who is this employee's manager?",
        name: 'option',
        choices: [
        'Employee Manger',   //TODO:
        ]
    },
]


function init() {

    inquirer.prompt(mainMenu)
      .then(async(selection) => {
        
        switch (selection.option) {
            case 'View All Employees':
                
              // This is how inquirer is interacting with the SQL. It is calling the method connected with the query and passing in the variables.
               await db.getEmployees()
               .then(results => {console.table(results)
               })
               
               .catch(err => console.log(err))
               .then(init)
            break;

            case 'View All Departments':
                
              // This is how inquirer is interacting with the SQL. It is calling the method connected with the query and passing in the variables.
               await db.getDepartments()
               .then(results => {console.table(results)
               })
               
               .catch(err => console.log(err))
               .then(init)
            break;

            case 'View All Roles':
                
                // This is how inquirer is interacting with the SQL. It is calling the method connected with the query and passing in the variables.
                 await db.getRoles()
                 .then(results => {console.table(results)
                 })
                 
                 .catch(err => console.log(err))
                 .then(init)
            break;

            case 'Add Employee':
                inquirer.prompt(addEmployee)
                // .then(async(selection) => {(db.addEmployees(selection)

               .catch(err => console.log(err))
               .then(init)
            break;

            case 'Remove Employee':
                inquirer.prompt(removeEmployee)
                // .then(async(selection) => {(db.addEmployees(selection)

               .catch(err => console.log(err))
               .then(init)
            break;

            case 'Update Employee Role':
                inquirer.prompt(updateRole)
                // .then(async(selection) => {(db.addEmployees(selection)

               .catch(err => console.log(err))
               .then(init)
            break;

            case 'Update Employee Manager':
                inquirer.prompt(updateManager)
                // .then(async(selection) => {(db.addEmployees(selection)

               .catch(err => console.log(err))
               .then(init)
            break;
        






            default:
                console.log("default")
            break;
        }
      }).catch(err => console.log(err))
    
      }

      
// function addEmployeeFunc() {
//     inquirer.prompt(addEmployee)
//       .then(async(results) => {
//           console.log(results)
// })}










    //   Function to start the program
    init()
    
    // 'View All Employees', 
    // 'View All Employees By Department', 
    // 'View All Employees By Manager',
    // 'Add Employee',
    // 'Remove Employee',
    // 'Update Employee Role',
    // 'Update Employee Manager'








// inquirer.prompt([
//         {
//             type: 'list',
//             message: 'What would you like to do?',
//             name: 'option',
//             choices: [
//             'View All Employees', 
//             'View All Employees By Department', 
//             'View All Employees By Manager',
//             'Add Employee',
//             'Remove Employee',
//             'Update Employee Role',
//             'Update Employee Manager'
//             ]
//         }
//     ]).then(async ({option}) => {
//       switch (option) {
//           case 'View All Books':
//             // This is how inquirer is interacting with the SQL. It is calling the method connected with the query and passing in the variables.
//              const books = await getBooks()
//              console.table(books)
//             break;
      
//           default:
//               break;
//       }
//     }).catch(err => console.log(err))


// inquirer
//     .prompt([
//         {
//             type: 'list',
//             message: 'Choose an operation?',
//             name: 'option',
//             choices: ['View All Books', ]
//         }
//     ]).then(async ({option}) => {
//       switch (option) {
//           case 'View All Books':
//              const books = await getBooks()
//              console.table(books)
//             break;
      
//           default:
//               break;
//       }
//     }).catch(err => console.log(err))