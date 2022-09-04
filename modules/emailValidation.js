const emailValidate = require("is-email")



module.exports = (arr) => {

return console.log(arr.map(x => emailValidate(x)))
}