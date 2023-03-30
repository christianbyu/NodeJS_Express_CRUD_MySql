const mysql = require('mysql');
const koneksi = mysql.createConnection({
   host: 'localhost',
   port: '3306',
   database: 'akademik',
   user: 'root',
   password: 'Root@123#$%',
   multipleStatements: true
});

koneksi.connect((err) => {
   if (err) {
      console.error('Failed to connect to MySQL:', err);
      return;
   }
   console.log('Connected to MySQL...');
});

module.exports = koneksi;
