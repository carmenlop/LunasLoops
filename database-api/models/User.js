const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const PetSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     breed: {
//         type: String,
//         required: true
//     },
//     size: {
//         type: String,
//         required: true
//     }
// })

// const ClientSchema = new Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     phoneNumber: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
//     },
//     address: {
//         street: {
//             type: String,
//             required: true
//         },
//         city: {
//             type: String,
//             required: true
//         },
//         zip: {
//             type: String,
//             required: true
//         }
//     },
//     pets: [PetSchema]
// })

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
    // clients: [ClientSchema],
})

UserSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret['password'];
        return ret
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User;