const mongoose = require('mongoose')

const Schema = mongoose.Schema

const carModel = new Schema({
    model: {
        type: String,
        require: true,
    },
    color: {
        type: String,
        require: true
    },
    year:{
        type: Number,
        require: true,
    }
})

module.exports = mongoose.model('carModel', carModel)