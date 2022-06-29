const { Schema, model } = require('mongoose')

module.exports = model('users', new Schema({
    img: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    surname:{
        type:String,
        required:true
    },
    number: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
}))