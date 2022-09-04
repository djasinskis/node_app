const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userModel = new Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: false,
        default: "https://powerusers.microsoft.com/t5/image/serverpage/image-id/98171iCC9A58CAF1C9B5B9/image-size/large/is-moderation-mode/true?v=v2&px=999"
    },
    money: {
        type: Number,
        required: false,
        default: 100
    },
    age:{
        type: Number,
        require: true,

    }
   
})

module.exports = mongoose.model('newUserWithMoneyModel', userModel)