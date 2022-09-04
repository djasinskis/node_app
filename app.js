const express = require("express")
const cors = require("cors")
const mainRouter = require("./routes/mainRouter")
const app = express()
const mongoose = require("mongoose")
const session = require("express-session")
const http = require("http").createServer(app)
const socket =  require("socket.io")
const io = socket(http,{cors: {origin:"http://localhost:3000"}})
require("dotenv").config()
const generateMovie = require("./modules/MoviesSeats")
const movieTime = generateMovie()



http.listen(4000)
app.use(cors({
    origin: true,
    credentials: true,
    methods: "GET,POST"
}))
app.use(express.json())
app.use(session({
    secret:"5sd5a9sd5as9d5",
    resave: false,
    saveUninitialized: true,
}))

mongoose.connect(process.env.MONGO_KEY)
.then(res => {
    console.log("Connection to MongoDB succesfull")
    
}).catch(e => console.log(e))


//visos ateinancios uzklausos eina i mainRouteri.
app.use("/", mainRouter)

//socket.io logic


const getUser = (socketID) =>{
    const result = users.find(x => x.id === socketID)
    return result.user
}

const emitSeatsToOnlineUsers = (io) =>{
users.map(x =>{
    io.to(x.id).emit("movieTime",movieTime)
})

}
const users = []
io.on("connect", (socket) =>{

    
    socket.on('login', user =>{
    const newUser = {
        user,
        id:socket.id,
    }
    users.push(newUser)
    socket.emit("movieTime", movieTime)
 

})
    socket.on("reserve",data =>{
        
        const user = getUser(socket.id)
        console.log(user)
        const {movieID: movie, seatIndex: seat} = data
        const movieIndex = movieTime.findIndex(x =>x.id === movie)
        const selectedMovieSeat = movieTime[movieIndex].seats[seat]
        selectedMovieSeat.reserved = user.username
        const freeSeats = movieTime[movieIndex].seats.filter(x => x.reserved === '').length
        movieTime[movieIndex].freeSeats = freeSeats
        const userIndex = users.findIndex(x => x.id === socket.id)
       
        if(users[userIndex].user.money < selectedMovieSeat.price){
            const error  = "not enought money!"
            return socket.emit("errorMsg", error)
        }else {
            users[userIndex].user.money -= selectedMovieSeat.price
        }
        const newUser = users[userIndex].user

        console.log(users[userIndex])
        console.log(newUser)
        emitSeatsToOnlineUsers(io)
        socket.emit("login", newUser)
        console.log(data)
        
        
    })


       
})
 

const bcrypt = require("bcrypt")


// const addAdmin = async ()=>{
// const adminPass = "slaptas1"
// const hash = await bcrypt.hash(adminPass, 10)
// const admin = new adminDB({

//     username: "adminas1",
//     password:  hash
// })
// await admin.save()
// }

// addAdmin()