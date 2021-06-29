const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const userRoutes = require('./routes/userRoutes.js')
const dbConnect = require('./config/db.js')
const { errorHandler, notFound } = require('./middleware/errorHandler.js')

const hierarchieRoutes = require('./routes/hierarchieRoutes.js')
const profileRoutes = require('./routes/profileRoutes.js')
const servicesRoutes = require('./routes/serviceRoutes.js')
const fonctionnaliteRoutes = require('./routes/fonctionnaliteRoutes.js')
const fonctionnaliteprofileRoute = require('./routes/fonctionnaliteProfileRoutes.js')
const courrierRoutes = require('./routes/courrierRoutes.js')
const uploadAnnexe = require('./utils/fileHandler.js')

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
app.use('/api/profile', profileRoutes)
app.use('/api/hierarchie', hierarchieRoutes)
app.use('/api/service', servicesRoutes)
app.use('/api/fonctionnalite', fonctionnaliteRoutes)
app.use('/api/fonctionnaliteprofile', fonctionnaliteprofileRoute)
app.use('/api/courrier', uploadAnnexe, courrierRoutes)
// app.use(notFound)

const theUrl = path.join(__dirname, 'uploads')

console.log('the url', theUrl)
app.use('/uploads',express.static(path.join(__dirname, '/backend/uploads')))
app.use(errorHandler)
app.listen(
 PORT,
 console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
 )
)
