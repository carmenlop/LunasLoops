const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    signup_date: {
        type: Date,
        default: Date.now
    },
})

UserSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret['password'];
        return ret
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;