const Game = require('./game.js').Game
const xyz  = require('./game.js').xyz

console.log(xyz)

class DayGame {
    constructor(day, game) {
        this._day = day
        this._game = game
    }

    set game(value) {
        console.log(Game)
        if(value instanceof Game) { // can I check with typeof???
            this._game = value
        }
        else
            console.log("No valid Game object")
    }

    get game() {
        return this._game
    }
}

let myDayGame = new DayGame("1/1/1", 100)
console.log(myDayGame)
myDayGame.game = new Game("John Doe 22", "John Doe 23", [1,1,1])
console.log(myDayGame.game.toString())