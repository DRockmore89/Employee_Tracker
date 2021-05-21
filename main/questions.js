module.export = {
    firstQuestion: {
        type: "list",
        name: "role",
        message: "what would you like to do?",
        choices: [
            "Add Departments",
            "Add Roles",
            "Add Employees",
            "View Departments",
            "View Roles",
            "View Employees",
            "Update Employee Roles",
        ],
    },

    addDepartments: [
      {
          type: "option",
          name: "Departments",
          message: "what is the department name?",   
      },  
    ],

    addRoles: [
      {
        type: "input",
        name: "Roles",
        message: "what is the roles title?",  
      },
      {
        type: "input",
        name: "roles",
        message: "what is the roles title?",  
      },
      {
        type: "input",
        name: "salary",
        message: "what is the roles salary?",  
      }  
    ],


}