const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected')
})

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connected error ${err}`)
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected')
})