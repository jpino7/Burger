const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        database: "p5gschf4daigalps",
        user: "wbzt55xguwqtjtue",
        port: 3306,
        password: "gys1ic3ohsxv8iwk"
    });
}


module.exports = connection;