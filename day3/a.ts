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

rucksacks.map((sack) => {
  let items = sack.split("");
  //  split items in half
  const firstHalf = items.slice(0, items.length / 2);
  const secondHalf = items.slice(items.length / 2, items.length);

  //   most common item in both halves
  const mostCommon = firstHalf.filter((item) => secondHalf.includes(item));

  //   Lowercase item types a through z have priorities 1 through 26.
  //   Uppercase item types A through Z have priorities 27 through 52.
  //   assign priorities to items
  if (mostCommon[0] === mostCommon[0].toLowerCase()) {
    const num = mostCommon[0].charCodeAt(0) - 96;
    sum += num;
  } else {
    const num = mostCommon[0].charCodeAt(0) - 38;
    sum += num;
  }
});

console.log(sum);
