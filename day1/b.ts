const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n\n");
// make a new array for every line in lines
const groups = lines.map((line) => line.split("\n"));
const groupsNumbers = groups.map((group) => group.map((line) => Number(line)));

for (const group in groupsNumbers) {
  const sum = groupsNumbers[group].reduce((a, b) => a + b);
  groupsNumbers[group] = sum;
  console.log(groupsNumbers);
}

// get the top 3 largest numbers in groupsNumbers
const largest = groupsNumbers.sort((a, b) => b - a).slice(0, 3);
// add all 3 in largest together
const sum = largest.reduce((a, b) => a + b);
console.log(sum);
