// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// Number to string
// Split them
// Reverse the items
// Map them to turn them back to number

function digitize(n) {
  const nString = n.toString();
  const nArr = nString.split("").reverse();
  return nArr.map((nString) => parseInt(nString));
}

console.log(digitize(35231));
