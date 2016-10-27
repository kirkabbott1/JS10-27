// var phonebookDict = {
//   Alice: '703-493-1834',
//   Bob: '857-384-1234',
//   Elizabeth: '484-584-2923'
// }
//
//
//
// // for (var things in phonebookDict) {
// //   var definition = phonebookDict[things];
// //   console.log(things + ': ' + definition);
// // }
//
// phonebookDict['kirk'] = "404-219-2572"
//
// // console.log(phonebookDict);
//
// delete phonebookDict['Alice']
//
// // console.log(phonebookDict);
//
// phonebookDict['Bob'] = "999-999-9991"
//
// console.log(phonebookDict);

function histogram(input) {
  var counts = {};
  for (var i = 0; i < input.length; i++) {
    var char = input[i];
    if (!counts[char]) {
      counts[char] = 1;
    } else {
      counts[char] += 1;
    }
  }
  return counts;
}
console.log(histogram('bananas'))
