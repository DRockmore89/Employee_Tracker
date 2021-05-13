const connection = require("./connection");

// connection.query things
module.export = {
    viewDepartments: () => {
        console.log("View all Departments...\n");
        connection.query("SELECT * FROM department", (err, res) => {
            if (err) throw err;
            // log all results of the SELECT statement
            console.log(res);
            connection.end();
            return res;
        });
    },

    ViewRoles: () => {
        console.log("View all Roles...\n");
        connection.query("SELECT * FROM role", (err, res) => {
            if (err) throw err;
            // log all results of the SELECT statement
            console.log(res);
            connection.end();
            return res;
        });
    },

    ViewEmployees: () => {
        console.log("View all Employees...\n");
        connection.query("SELECT * FROM employees", (err, res) => {
            if (err) throw err;
            // log all results of the SELECT statement
            console.log(res);
            connection.end();
            return res;
        });
    },

    


}