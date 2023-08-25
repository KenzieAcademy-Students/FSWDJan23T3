function nSquared(arr) {
  let numOperations = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      numOperations++;
    }
  }
  return numOperations;
}

const arr50000 = [];
for (let i = 0; i < 50000; i++) {
  arr50000.push(i + 1);
}

const arr10 = [];
for (let i = 0; i < 10; i++) {
  arr10.push(i + 1);
}

const arr200000 = [];
for (let i = 0; i < 200000; i++) {
  arr200000.push(i + 1);
}

console.log("50000 Element Array: ", nSquared(arr50000));
// console.time("500 Element");
// nSquared(arr500);
// console.timeEnd("500 Element");

// console.log("10 Element Array: ", nSquared([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.time("10 Element");
// nSquared(arr10);
// console.timeEnd("10 Element");

console.log("200000 Element Array: ", nSquared(arr200000));
// console.time("2000 Element");
// nSquared(arr2000);
// console.timeEnd("2000 Element");
