/*

{
  day: '1/1/1',
  game: { opponent1: 'AAAA', opponnent2: 'BBBB', rounds: [ 1, 1, 2 ] }
}

*/


class Game {
    _rounds = new Array()
    constructor(opponent1, opponent2, rounds) {
        console.log(this._rounds)
        this._opponent1 = opponent1 // if I have a set then this line calls the set opponent1(value)
        this._opponent2 = opponent2
        this._rounds    = rounds
    }

    set opponent1(value) {
        this._opponent1 = value.toLowerCase()
    }

    get opponent1() {
        return this._opponent1.toUpperCase()
    }

    set opponent2(value) {
        this._opponent2 = value.toLowerCase()
    }

    get opponent2() {
        return this._opponent2.toUpperCase()
    }

    set rounds(value) {
        if(Array.isArray(value)) 
            this._rounds = value
        else
            console.log("Not valid data. Array is needed")
    }

    get rounds() {
        return this._rounds
    }

    toString = () => {
        return `Opponent - 1: ${this.opponent1}, Opponent - 2: ${this.opponent2}, rounds: [${this.rounds}]`
    }
}

module.exports = { Game, xyz: 1000000 } 

// let myGame = new Game("John Doe 1", "John Doe 2", [0,0,0])
// // console.log(myGame.opponent1)

// myGame.opponent1 = "jOhN dOe 1" // setter
// console.log(myGame._opponent1)
// console.log(myGame.opponent1) // getter
// myGame.rounds = 4 //[1,1,0]
// console.log(myGame.rounds)