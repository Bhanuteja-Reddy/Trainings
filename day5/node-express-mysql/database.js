var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',// Replace with your host name
  port:'3309', 
  user: 'root',      // Replace with your database username
  password: 'Admin@sfcs',      // Replace with your database password
  database: 'nodeapp' // // Replace with your database Name
}); 

conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = conn;