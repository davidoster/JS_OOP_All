const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
});


let sql = "SHOW DATABASES;"
function myCallBack(err, results, fields) {
    if (err != false) { // true??? there is an object of type mysql.QueryError
        console.log()
    } else { // false???? === null
        console.log(fields)
        console.log(results)
        console.log("This is the end")
        
    }
}
connection.query(sql, myCallBack)
connection.end()


