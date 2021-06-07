function hello() {
    return { 
        title: "HelloBar",
        description: "This is the Hello Bar!"
    }
}

export class MyPromise {
    constructor(resolve_obj, reject_obj) {
        this.resolve = resolve_obj
        this.reject = reject_obj
    }
    execute = (value) => {
        let myThis = this // this of class MyPromise
        // console.log("inside execute: " + value)
        return(
            new Promise(function(resolve, reject) {
                if(value.year_of_contract <= 2035) {
                    reject(myThis.reject())
                }
                if(value.initial_value == 1000) {
                    reject(myThis.reject())
                }
                if(value.reference_value >= 50000) {
                    reject(myThis.reject())
                }
                resolve(myThis.resolve())
            })
        )
    }
}

// module.exports = { 
//     func_hello : hello, 
//     initial_value: 200,
//     Promise: MyPromise, // same as MyPromise
//     myfunction2: function() { return 22 }
// }