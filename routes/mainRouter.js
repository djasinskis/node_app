const express = require("express")
const router = express.Router()

//mainRouteris priima uzklausa i tam tikra rout'a pvz: "/start" ir paleidzia funkcija ar veiksma kuris aprasytas mainController.

const {
    register,
login,

} = require("../controllers/mainController")

const  {validateRegister} = require("../modules/validators")




router.post("/register",validateRegister,register)
router.post("/login",login)




module.exports = router