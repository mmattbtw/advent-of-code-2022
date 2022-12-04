let sum = 0;
const input = await Deno.readTextFile("./input.txt");
const rucksacks = input.split("\n");
// const rucksacks = [
//   "vJrwpWtwJgWrhcsFMMfFFhFp",
//   "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
//   "PmmdzqPrVvPwwTWBwg",
//   "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
//   "ttgJtRGJQctTZtZT",
//   "CrZsJsPPZsGzwwsLwLmpwMDw",
// ];

// split rucksacks into every 3 items
const rucksacks3 = [];
for (let i = 0; i < rucksacks.length; i += 3) {
  rucksacks3.push(rucksacks.slice(i, i + 3));
}

// for items in rucksacks3, find the most common item in all 3 itesm
rucksacks3.map((sack) => {
  const firstHalf = sack[0].split("");
  const secondHalf = sack[1].split("");
  const thirdHalf = sack[2].split("");

  const mostCommon = firstHalf.filter(
    (item) => secondHalf.includes(item) && thirdHalf.includes(item)
  );
  if (mostCommon[0] === mostCommon[0].toLowerCase()) {
    const num = mostCommon[0].charCodeAt(0) - 96;
    sum += num;
  } else {
    const num = mostCommon[0].charCodeAt(0) - 38;
    sum += num;
  }
});

console.log(sum);
