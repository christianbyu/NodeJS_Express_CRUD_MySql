const mysql = require('mysql');
// buat konfigurasi koneksi
const koneksi = mysql.createConnection({
   host: '127.0.0.1',
   database: 'akademik',
   user: 'root',
   password: '',
   multipleStatements: true
});
// koneksi database
koneksi.connect((err) => {
   if (err) throw err;
   console.log('MySQL Connected...');
});
module.exports = koneksi;
