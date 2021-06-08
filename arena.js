/*
    Fighting Arena Games<br>
    Day Tournament has multiple games<br>
    Every game has 3 rounds<br>
    Every game has two opponents who win or lose on a round
*/



/*
Arena
    Day 1
        Game 1
            Opponent 1, Opponent 2
                Round 1: result
                Round 2: result
                Round 3: result
    Day 2
        Game 1
            Opponent 1, Opponent 2
                Round 1: result
                Round 2: result
                Round 3: result
        Game 2
            Opponent 1, Opponent 2
                Round 1: result
                Round 2: result
                Round 3: result        
*/

let Arena = {
        
    tournaments: { data: [{day: "1/1/1", game: {opponent1: "AAAA", opponnent2: "BBBB", rounds: [1,1,2]} }] }

}
console.log(Arena.tournaments.data[0])






let Tournament  = {} // properties - HUMAN READABLE
// let Tournament2 = [] // indexes - ..........
let Game = {}
