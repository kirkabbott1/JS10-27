var words = ['very', 'important', 'person'];

function firstChar(word) {
  return word[0].toUpperCase();
}

function acronym(words) {
  var firstChars = words.map(firstChar);
  return firstChars.reduce(function(a, b) {
    return a + b;
  });
}

//console.log(firstChar('DEFE'));
console.log(acronym(words));
