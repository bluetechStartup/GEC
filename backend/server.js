const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cors = require('cors')

const userRoutes = require('./routes/userRoutes.js')
const dbConnect = require('./config/db.js')
const {errorHandler,notFound}=require('./middleware/errorHandler.js')
const app = express()
dotenv.config()
dbConnect
app.use(express.json())
app.use(cors())
app.get('/', (req, res, next) => {
 res.json('Karibu muri system ya Gestion des courrier !!')
})

const PORT = process.env.PORT || 3005
app.use('/api/users', userRoutes)
app.use(notFound)
app.use(errorHandler)
app.listen(
 PORT,
 console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
 )
)
