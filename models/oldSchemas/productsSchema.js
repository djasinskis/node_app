const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemModel = new Schema({
    title: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true
    },
  
    email:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('boughtProducts', itemModel)