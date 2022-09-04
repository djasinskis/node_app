// mainControleris atlieka veiksmus (funckijas ir t.t.) kurie atejo i tam tikra rout'a kuris iskviecia metoda(paleidzia viena is controleriu.)

const sendRes = require("../models/sendRes")
const userDB = require("../models/userSchema")
const bcrypt = require("bcrypt")


module.exports = {
    register: async (req,res) =>{
            const {username, passOne,age} = req.body

            const password = await bcrypt.hash(passOne,10)
            const user = new userDB({
            username,
            password,  
            age,
        })
        await user.save()

        sendRes(res, "Registration Successfull!", false)
    },
    login: async (req,res) => {
        const {username, password} = req.body
       

        const user = await userDB.findOne({username})

        if(user) {
            const compare =  bcrypt.compare(password,user.password)
            if(compare) {
                let newUser = {
                    username:user.username,
                    age: user.age,
                    money:user.money,
                }
                return sendRes(res, "Login succesfull ", false, newUser)
            }
            return sendRes(res, "Password does not match ", true, null)
        }
        
        
        return sendRes(res, "User not found", true, null)
    },
   
    
  
}



 // updateUser: async (req, res) =>{
    //     const {id, url} = req.body
    //     console.log("updated")
    //   const user =   await userSchema.findOneAndUpdate({_id: id},{$set:{image: url}}, {new: true})
    //     sendRes(res,"Update is oK", false,user)
       
    // }