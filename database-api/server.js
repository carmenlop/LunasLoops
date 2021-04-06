// imports
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const port = process.env.PORT || 3001
const app = express()

// middleware JSON parsing
app.use(express.json())
app.use(cors())

// middleware - API routes
app.use('/api/auth', routes.auth);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`))