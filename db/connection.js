const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env")});

const mysql2 = require("mysql2");
// const { Module } = require("module");

const connection = mysql2.createConnection({
    host: "localhost",

    // this is your port, if not its 3005
    port: 3005,

    // this is for the username
    
    user:process.env.DB_USERNAME,

    // make sure you put your own updated mysql password
    password: process.env.DB_PASSWORD,

    database: process.env.DB_DATABASE,
});

module.exports = connection;