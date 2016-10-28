// var numbs = [-1, 3, 5, -4];
//
// function pos(n) {
//   return n > 0;
// }
// var turnpos = numbs.filter(pos);
// console.log(turnpos);

var moreNumbs = [2,3,4,5];
//
// function even(n) {
//   return n % 2 === 0;
// }
// var turneven = moreNumbs.filter(even);
// console.log(turneven)
//
// function square(n) {
//   n * n;

// var turnsquare = function(n) {
//   return n * n;
// };
// var vrblsquare = moreNumbs.map(turnsquare);
// console.log(vrblsquare);

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

// var cool = cities.filter(function(city) {
//   return city.temperature < 70.0;
// });
// console.log(cool);

// var cool = cities.filter(function(city) {
//   console.log(city.name);
// });
// console.log(cool);
//
// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
//
// call3Times("hello, world!");

var charDict = {
  A: '4',
  E: '3',
  G: '6',
  I: '1',
  O: '0',
  S: '5',
  T: '7'
};
function mapChar(chr) {
  return charDict[chr.toUpperCase()] || chr;
}
function leetspeak(text) {
  return text.split('').map(mapChar).join('');
}
console.log(leetspeak('Aging toast'));
