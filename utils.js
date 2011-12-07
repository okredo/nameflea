exports.ArrayUtil.findIndex = function(array, value) {
  var ctr = null;
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return ctr;
}

/*
exports.Random = function(min, max) {
  var offset = min;
  var range = (max - min) + 1;

  var randomNumber = Math.floor(Math.random() * range) + offset;
  return randomNumber;
}
*/
