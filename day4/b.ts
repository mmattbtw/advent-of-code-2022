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
//   "1-4,2-6",
//   "4-8,1-2",
//   "4-5,1-4",
// ];

pairs.map((pair) => {
  //   [a, b] = ["2-4", "6-8"];
  const [a0, b0] = pair.split(",");
  console.log("a", a0, "b", b0);

  // a1[0] = "2", a1[1] = "4"
  const a1 = a0.split("-");

  // b1[0] = "6", b1[1] = "8"
  const b1 = b0.split("-");

  // same but numbers

  // a2 = 2
  const a = parseInt(a1[0]);
  // a3 = 4
  const b = parseInt(a1[1]);

  // b2 = 6
  const c = parseInt(b1[0]);
  // b3 = 8
  const d = parseInt(b1[1]);

  if (a <= c && b >= d) {
    num++;
    console.log("yep1");
  } else if (c <= a && d >= b) {
    num++;
    console.log("yep2");
  } else if (c >= a && c <= b) {
    console.log("yep4");
    num++;
  } else if (d >= a && d <= b) {
    console.log("yep5");
    num++;
  }
});
console.log(num);
