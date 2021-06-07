const mysql = require('mysql2')
const con = mysql.createConnection(
    {
        host:'localhost', 
        user: 'root', 
        password: 'root', 
        database: 'sakila'
    }
)
con.promise().query("SELECTwerwerewr 1")
  .then( ([rows,fields]) => { // () => { console.log(rows) } ------ Connection OK with RESULTS
    console.log(rows)
  })
  .catch(myError) // ERROR, print the error
  .then(conEnd(con)) // connection is open, if results exists exits or if err exists exits
  .then(console.log("This is the end!")) // THIS LINE prints first BECAUSE
  // THERE ISN'T ANOTHER 
  // E  V  E  N  T!!!!

function myError(err) { 
    console.log(err.code) 
}

function conEnd(con) { 
    con.end() 
}