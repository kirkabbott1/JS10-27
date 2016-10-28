var dict = {
  A: '4',
  E: '3',
  G: '6',
  I: '1',
  O: '0',
  S: '5',
  T: '7'
};

function leetspeak(text) {
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var chr = text.charAt(i).toUpperCase();
    if (chr in dict) {
      chr = dict[chr];
    }
    result += chr;
  }
  return result;
}

console.log(leetspeak('Leet'))
