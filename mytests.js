// Fighting Arena Games
// Day Tournament has multiple games
// Every game has 3 rounds


// Have a new object of type Calendar where each day has a Note object

// Calendar (class)
// Days [0-6]
// Note (class)
// String

class Calendar {
    constructor(details, note) { // dayNote is a Day object!!!!
        this.days = new DaysArray(details, note)
    }

    add() { } // add a new dayNote
}


class Day {
    constructor(dayDetails, note) {
        this.dayDetails = dayDetails
        this.note = new Note(note)
    }
}



class Note {
    constructor(note) {
        this.note = note
    }
}

class DaysArray {
    // array = []
    constructor(details, note) {
        this.array = []
        this.array.push(new Day(details, note))
    }
}

let myXDay = new Day("11/11/00", "XXX")
console.log(myXDay)

let myCalendar = new Calendar("1/1/1", "Some other Note") // 1st: Date, 2nd: Note
console.log(myCalendar)
console.log(typeof myCalendar.days)
console.log(myCalendar.days.array[0].dayDetails, myCalendar.days.array[0].note)