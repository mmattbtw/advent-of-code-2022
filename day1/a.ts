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

// largest number in groupsNumbers
const largest = Math.max(...groupsNumbers);
console.log(largest);
