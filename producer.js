class Book {
    constructor(name, city) {
        this.name = name
        this.city = city
    }

    produce() {
        // setTimeout(() => {console.log("Hello")},5000)
        let thisofclass = this //.myThis
        setTimeout(function() {
           console.log(new Book(this.name, thisofclass.city))
        }, 15000)
    }

    get Details() {
        return new Book(this.name, this.city)
    }

    toString() {
        console.log(this)
    }
}

module.exports = Book