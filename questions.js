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
        type: "option",
        name: "roles",
        message: "what is the roles title?",  
      },
      {
        type: "input",
        name: "title",
        message: "what is the title name?"

      },
      {
        type: "input",
        name: "salary",
        message: "what is the roles salary?",  
      },
      {
        type: "input",
        name: "id",
        messgae: "what is the roles id?",
      }  
    ],

    addEmployees: [
      {
        type: "input",
        name: "firstname",
        message: "what is the employees first name?",  
      },
      {
        type: "input",
        name: "lastname",
        message: "what is the employyes last name?",  
      },
      {
        type: "input",
        name: "role id",
        message: "what is the employees role id",  
      }  
    ]


}