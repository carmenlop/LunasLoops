const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WalkScheduleSchema = new Schema({
    walkDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('WalkSchedule', WalkScheduleSchema)