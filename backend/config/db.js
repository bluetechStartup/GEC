const mysql = require('mysql')

const con = {
 host: process.env.DB_HOST,
 user: 'root',
 password: '',
 database:'ged',
 connectionLimit: 99,
 queueLimit: 0,
 waitForConnection: true,
}

const dbConnect = mysql.createPool(con)

module.exports = dbConnect
