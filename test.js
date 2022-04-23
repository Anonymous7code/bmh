let Acc = [
  "t223337342",
  "t504889799",
  "davejaydip3",
  "tavejaydip3",
  "basheersk",
];

function test() {
  for (let x of Acc) {
    // Result = Acc.indexOf(x);
    /*  if (x[0] == "t") {
    } else {
    } */
    for (let a of x) {
      //   console.log(a);
      if (a == "t") {
        console.log(`removing ${a}`);
      } else {
      }
    }
  }
}

test();
