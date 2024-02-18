require('colors')
const express = require('express')
const app = express()
const cors = require('cors')

// Body parser
app.use(express.json()) //middleware for parsing json data
app.use(cors()) //middleware for enabling CORS     


const employeeRoutes = require('./routes/employee')

// Mount routers
app.use('/api/v1/employee', employeeRoutes)

const PORT = 3000

app.listen(PORT, console.log(`Server running on port ${PORT}`.bgBlue))