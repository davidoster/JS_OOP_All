let Book = require('./producer.js')


let myBook = new Book("A", "B")
console.log(myBook)
let myBook1 = new Book("A", "B")
console.log(myBook.produce()) // undefined

console.log("Hello")

// let book1 = new Book1()

// let k = new a