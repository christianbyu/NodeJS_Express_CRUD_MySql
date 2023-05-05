const mysql = require('mysql');
const koneksi = mysql.createConnection({
   host: '$SERVER_HOST',
   port: '3306',
   database: '$DATABASE_NAME',
   user: '$DATABASE_USERNAME',
   password: '',
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
