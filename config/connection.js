var mysql = require('mysql')
var connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'newfoodfighters',
    user: 'root',
    password: '',
    database: 'gx884fz362pzbn5m'
  })
};
connection.connect()
module.exports = connection
