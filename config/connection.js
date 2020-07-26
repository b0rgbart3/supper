// Set up MySQL connection.
var mysql = require("mysql");

var db_host = process.env.JAWSDB_URL;
var db_user = process.env.DB_USER;
var db_pass = process.env.DB_PASS;
var db_dbase = process.env.DB_DBASE;

//var host = process.env.HOST || "localhost";
var connection;

// If there is a JAWSDB_URL - that means we are on Heroku
if (db_host) {

  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
// Otherwise, we are on our local machine
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user:  db_user,
    password: db_pass,
    database: "supper"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
