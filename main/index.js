// "front end inquirer"
const inquirer = require("inquirer");
const {
    firstQuestion,
    addDepartments,
    addRoles,
    addEmployees,
    viewDepartments,
    viewRoles,
    viewEmployees,
    updateEmployeeRoles,
} = require("./questions.js");

const firstQuestionFunction = () => {
    inquirer.prompt(firstQuestion).then ((answer) => {
     if(answer.role === "Add Departments") {
        //  fire the ask manager question
        addDepartmentFunc();
     }else if (answer.role === "Add Roles") {
        //  fire the ask engineer question
        addRolesFunction()
     }else if (answer.role === "Add Employees") {
        //  fire the ask employees question
        addEmployeesFunction()
     }else if (answer.role === "View Departments") {
        //  fire the ask intern questions
        viewDepartmentsfunction();
     }else if (answer.role === "View Roles") {
        //  fire the assk inter question
        viewRolesFunction();
     }else if (answer.role === "ViewEmployees") {
        //  fire the ask intern question
        viewEmployeesFunction();
     }
    });
};

firstQuestionFunction();

function addDepartmentsFunction() {
    inquirer.prompt(addDepartments).then((answer) => {
        console.log(answers);
        firstQuestionFunction();
    });
}

function addRolesFunction() {
    inquirer.prompt(addRoles).then((answer) => {
        console.log(answer);
        firstQuestionFunction();
    });
}

function addEmployeesFunction() {
    inquirer.prompt(addEmployees).then((answer) => {
        console.log(answer);
        firstQuestionFunction();
    });
}

function viewDepartmentsFunction() {
    
        console.log(viewDepartments);
        firstQuestionFunction();
    }
   

function viewRolesFunction() {
        console.log(viewRoles);
        firstQuestionFunction();
    }   


function viewEmployeesFunction() {
        console.log(viewEmployees);
        firstQuestionFunction();
    }   


function updateEmployeeRoleFunction() {
    inquirer.prompt(updateEmployeeRole).then((answer) => {
        console.log(answers);

    })
}
