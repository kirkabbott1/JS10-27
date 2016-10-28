// Austin rocks!

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

console.log(leetspeak('Austin rocks!'));
