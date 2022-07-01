const { Schema, model } = require('mongoose')
const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlenght: 6,
        required: true
    },
    adminImg: {
        type: String
    }

})

module.exports = model('admin', adminSchema)