const mysql = require('mysql')

const con = {
 host: process.env.DB_HOST,
 user: 'root',
 password: '',
 database:'tadeapp_edutech',
 connectionLimit: 99,
 queueLimit: 0,
 waitForConnection: true,
}

const dbConnect = mysql.createPool(con)
// const dbConnect = mysql.createConnection(con)

// dbConnect.connect(err => {
//  if (err) {
//   return console.log('database failed to connect')
//  }
//  console.log('database connected..!!!')
// })

module.exports = dbConnect
