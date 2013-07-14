var http = require("http");
var requestHandler = require("./request-handler.js");
var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

// IMPORTED FROM CHAT-SERVER: basic-server.js
var port = 8081;
var ip = "127.0.0.1";

var server = http.createServer(requestHandler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "MYSQL123",
  database: "chat"
});

exports.db = function(query, cb) {
  console.log("Database query! Yay!");
  //dbConnection.connect();
  dbConnection.query(query, cb);
  //dbConnection.end();
  //console.log("Ended our query!");
};

// POST
// INSERT into messages (username, message, date, room) values (data.username, data.message, new Date(), data.room);


// GET (generic)
// SELECT * from messages where date > ???

// GET (username)
// SELECT * from messages where username = data.username;
// function(err, row, field) {
//  var resultArr = [];
//  for (var i = 0; i < rows.length; i++) {
//    var obj = {};
//    obj.username = row[0].username;
//    obj.message = row[0].message;
//    obj.date = row[0].date;
//    obj.room = row[0].room;
//    resultArr.push(obj);
//  }
//  return resultArr;
// }


// GET (room)
// SELECT * from messages where room = data.room;