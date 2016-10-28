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
// phonebookDict['kirk'] = "404-219-2672"
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

// function histogram(input) {
//   var counts = {};
//   for (var i = 0; i < input.length; i++) {
//     var char = input[i];
//     if (!counts[char]) {
//       counts[char] = 1;
//     } else {
//       counts[char] += 1;
//     }
//   }
//   return counts;
// }
// console.log(histogram('bananas'))

// function cipher(text) {
//   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
//   var result = '';
//   for (var i = 0; i < text.length; i++) {
//     var chr = text[i];
//     var idx = alphabet.indexOf(chr.toUpperCase());
//     var newIdx = idx + 13;
//     if (newIdx >= alphabet.length) {
//       newIdx -= 26;
//     }
//     result += alphabet[newIdx];
//   }
//   return result;
// }

// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function mapChar(chr) {
  var idx = alphabet.indexOf(chr.toUpperCase());
  var newIdx = idx + 13;
  if (newIdx >= alphabet.length) {
    newIdx -= 26;
  }
    return alphabet[newIdx];
}

function cipher(text) {
  // var charArray = text.split('');
  // var newCharArray = charArray.map(mapChar);
  // var result = newcharArray.join('');
  // return result;
} return text.split('').map(mapChar).join('');
var encrypted = cipher('GENIUS');

console.log(encrypted);
