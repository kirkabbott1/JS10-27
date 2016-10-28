var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}
// console.log(sum(arr))

function compareSum(arr1, arr2) {
  return sum(arr1) - sum(arr2);
}
// console.log(compareSum(arr1, arr2))

function compareLength(arr1, arr2) {
  return arr1.length - arr2.length;
}

arr.sort(compareSum);
