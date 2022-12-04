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
enum winLossConditions {
  Lose = "X",
  Draw = "Y",
  Win = "Z",
}

lines.forEach((line) => {
  const play = line.split(" ");
  console.log(play);
  if (play[0] === p1Pick.Rock) {
    console.log("p1 rock");
    if (play[1] === winLossConditions.Lose) {
      console.log("p2 lose");
      score += 3;
      score += 0;
      return;
    }
    if (play[1] === winLossConditions.Draw) {
      console.log("p2 draw");
      score += 1;
      score += 3;
      return;
    }
    if (play[1] === winLossConditions.Win) {
      console.log("p2 win");
      score += 2;
      score += 6;
      return;
    }
  }
  if (play[0] === p1Pick.Paper) {
    console.log("p1 paper");
    if (play[1] === winLossConditions.Lose) {
      console.log("p2 lose");
      score += 1;
      score += 0;
      return;
    }
    if (play[1] === winLossConditions.Draw) {
      console.log("p2 draw");
      score += 2;
      score += 3;
      return;
    }
    if (play[1] === winLossConditions.Win) {
      console.log("p2 win");
      score += 3;
      score += 6;
      return;
    }
  }
  if (play[0] === p1Pick.Scissors) {
    console.log("p1 scissors");
    if (play[1] === winLossConditions.Lose) {
      console.log("p2 lose");
      score += 2;
      score += 0;
      return;
    }
    if (play[1] === winLossConditions.Draw) {
      console.log("p2 draw");
      score += 3;
      score += 3;
      return;
    }
    if (play[1] === winLossConditions.Win) {
      console.log("p2 win");
      score += 1;
      score += 6;
      return;
    }
  }
});

console.log(score);
