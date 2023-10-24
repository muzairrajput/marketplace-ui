const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'mysql-200755c9-uzairrajput-20bd.a.aivencloud.com',
  user: 'avnadmin',
  port: '18460',
  password: 'AVNS_og0tNo1inJjCF6xyVem',
  database: 'souqdb',
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.message);
  } else {
    console.log('Connected to Database');
  }
});


module.exports = connection;  
