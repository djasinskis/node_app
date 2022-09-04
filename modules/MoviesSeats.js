const uID = require('uid')

module.exports = ()=> {

  const newMovies = [
  {
    image: "http://37.221.162.250/uploads/posts/2021-10/1634029810_swan.jpg",
    title: "Princesė Gulbė. Karališkoji miZterija",
    viewerAge: 12,
    id: "07aa915d42" ,
    seats: [],
    freeSeats: 30,
    
    
    
    
  },
  {
    image: "http://37.221.162.250/uploads/posts/2021-10/1633429858_gui.jpg",
    title: "Gitara",
    viewerAge: 14,
     id: uID.uid(10) ,
    seats: [],
    freeSeats: 30,
    
  },
  {
    image: "http://37.221.162.250/uploads/posts/2021-09/1633020257_alive.jpg",
    title: "No One Gets Out Alive",
    viewerAge: 18,
     id: uID.uid(10) ,
    seats: [],
    freeSeats: 30,
    
  },
  {
    image: "http://37.221.162.250/uploads/posts/2021-10/1634745602_dune.jpg",
    title: "Dune",
    viewerAge: 16,
     id: uID.uid(10) ,
    seats: [],
    freeSeats: 30,
    
  },
  {
    image: "http://37.221.162.250/uploads/posts/2021-10/1634730517_copshop.jpg",
    title: "Cop Shop",
    viewerAge: 18,
     id: uID.uid(10) ,
    seats: [],
    freeSeats: 30,
   
  },
  {
    image: "http://37.221.162.250/uploads/posts/2021-10/1634730926_force.jpg",
    title: "G - Force",
    viewerAge: 16,
     id: uID.uid(10) ,
    seats: [],
    freeSeats: 30,
    
  },
  {
    image: "http://37.221.162.250/uploads/posts/2021-10/1634643547_dat.jpg",
    title: "The dating List",
    viewerAge: 10,
     id: uID.uid(10) ,
    seats: [],
    freeSeats: 30,
    
  },
  {
    image: "http://37.221.162.250/uploads/posts/2021-10/1634631540_christmas.jpg",
    title: "Christmas",
    viewerAge: 10,
     id: uID.uid(10) ,
    seats: [],
    freeSeats: 30,
    
  },
]

 for(j = 0; j< newMovies.length;j++) {
  
 
for(let i =0; i< 30 ; i++) {
  newMovies[j].seats.push({
    price: 7.99 ,
    reserved: ''
    })
  }

  
}
    return newMovies
 }