const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WalkScheduleSchema = new Schema({
    walkDate: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    }
})

module.exports = mongoose.model('WalkSchedule', WalkScheduleSchema)