
const sendRes = require("../models/sendRes")
module.exports = {
       validateRegister: (req, res, next) => {
        const { passOne, passTwo, age} = req.body

        if(passOne !== passTwo) return sendRes(res, "bad password", true)

        if(age < 9 ) return sendRes(res, "You must be at least 10 years old to register!")

        

        next()
    }
}
  
 