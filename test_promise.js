// console.log(new Promise(function(resolve, reject) {
//     // resolve(new Boolean(true))
//     reject("All Bad!")
    
// }))
// const mod_myproms = require("./mypromises.js")
import { MyPromise } from "./mypromises.js"

// const Promise = mod_myproms.Promise
const Promise = MyPromise

const resolve = function() { return "You got your loan!!!!"}
const reject = function() { return "No loan for you piece of s....t"}

let myPersonalLoan = new Promise(resolve, reject)
console.log(myPersonalLoan)
let myObjectBL = {
    initial_value: 2000,
    reference_value: 40000,
    year_of_contract: 2036
}

console.log(myPersonalLoan.execute(myObjectBL))
console.log(myPersonalLoan.execute(myObjectBL))
console.log(myPersonalLoan.execute(myObjectBL))
document.write(myPersonalLoan.execute(myObjectBL))





