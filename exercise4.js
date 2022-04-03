function alphaRange(start, stop, step){
      
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var numRange = range(start, stop, step);
  var result = numRange.map(el => {
      return alphabet[el % 26];
  });
  return result;
}
console.log(alpharange("a","f",2);