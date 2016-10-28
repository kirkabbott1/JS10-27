
var arr = [4, 5, 6, 7];

function square(n) {
  return n * n;
}

var allSquared = [];
arr.forEach(function(number) {
  allSquared.push(square(number));
});

var allSquared = arr.map(square);

console.log(allSquared);
