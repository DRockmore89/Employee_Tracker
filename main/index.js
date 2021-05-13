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
        addRolesfunction()
     }else if (answer.role === "Add Employees") {
        //  fire the 
     }
    }
)}