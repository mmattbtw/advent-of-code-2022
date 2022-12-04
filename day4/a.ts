const input = await Deno.readTextFile("input.txt");
const pairs = input.split("\n");
let num = 0;
// const pairs = [
//   "2-4,6-8",
//   "2-3,4-5",
//   "5-7,7-9",
//   "2-8,3-7",
//   "6-6,4-6",
//   "2-6,4-8",
// ];

pairs.map((pair) => {
  //   [a, b] = ["2-4", "6-8"];
  const [a, b] = pair.split(",");

  // a1[0] = "2", a1[1] = "4"
  const a1 = a.split("-");

  // b1[0] = "6", b1[1] = "8"
  const b1 = b.split("-");

  // same but numbers

  // a2 = 2
  const a2 = parseInt(a1[0]);
  // a3 = 4
  const a3 = parseInt(a1[1]);

  // b2 = 6
  const b2 = parseInt(b1[0]);
  // b3 = 8
  const b3 = parseInt(b1[1]);

  if (a2 <= b2 && a3 >= b3) {
    num += 1;
  } else if (b2 <= a2 && b3 >= a3) {
    num += 1;
  }
});
console.log(num);
