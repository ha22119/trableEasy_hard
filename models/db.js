var mysql = require('mysql');

// console.log('app.js', process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, process.env.DATABASE)

// Mysql 연결 connection 객체 생성
var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DATABASE
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

module.exports = connection;