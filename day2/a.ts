const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n");
let score = 0;

// const lines = ["A Y", "B X", "C Z"];

// Player 1
// Rock = A
// Paper = B
// Scissors = C

// Player 2
// Rock = X
// Paper = Y
// Scissors = Z

// score for picks
// rock = 1
// paper = 2
// scissors = 3

// score for outcome
//  0 = lost
//  3 = draw
//  6 = win

enum p1Pick {
  Rock = "A",
  Paper = "B",
  Scissors = "C",
}
enum p2Pick {
  Rock = "X",
  Paper = "Y",
  Scissors = "Z",
}

lines.forEach((line) => {
  const play = line.split(" ");
  console.log(play);
  // Draws
  if (play[0] === p1Pick.Rock && play[1] === p2Pick.Rock) {
    console.log("draw rock");
    // picks
    score += 1;
    // draw
    score += 3;
  }
  if (play[0] === p1Pick.Paper && play[1] === p2Pick.Paper) {
    console.log("draw paper");
    // picks
    score += 2;
    // draw
    score += 3;
  }
  if (play[0] === p1Pick.Scissors && play[1] === p2Pick.Scissors) {
    console.log("draw scissors");
    // picks
    score += 3;
    // draw
    score += 3;
  }

  // Player 2 wins
  if (play[0] === p1Pick.Rock && play[1] === p2Pick.Paper) {
    console.log("p2 wins paper");
    // picks
    score += 2;
    // win
    score += 6;
  }
  if (play[0] === p1Pick.Paper && play[1] === p2Pick.Scissors) {
    console.log("p2 wins scissors");
    // picks
    score += 3;
    // win
    score += 6;
  }
  if (play[0] === p1Pick.Scissors && play[1] === p2Pick.Rock) {
    console.log("p2 wins rock");
    // picks
    score += 1;
    // win
    score += 6;
  }

  //   p2 loss
  if (play[0] === p1Pick.Rock && play[1] === p2Pick.Scissors) {
    console.log("p2 loss scissors");
    // picks
    score += 3;
  }
  if (play[0] === p1Pick.Paper && play[1] === p2Pick.Rock) {
    console.log("p2 loss rock");
    // picks
    score += 1;
  }
  if (play[0] === p1Pick.Scissors && play[1] === p2Pick.Paper) {
    console.log("p2 loss paper");
    // picks
    score += 2;
  }
});

console.log(score);
