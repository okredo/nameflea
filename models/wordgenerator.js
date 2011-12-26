var Common = require("./common_alphabet.js");
var Female = require("./female_alphabet.js");
var Male = require("./male_alphabet.js");

//
// Construct wg, passing in gender if avail
//
exports.WordGenerator = function(gender) {
  this._wordsUsed = {};

  if (gender != "undefined") {
    if (gender == "male") {   
      var m = new Male();
      this._alphabet = m.getAlpha();
      //console.log(this._alphabet);
    }
    else {
      var f = new Female();
      this._alphabet = f.getAlpha();
      //console.log(this._alphabet);
    }
  }
  else {
      var c = new Common();
      this._alphabet = c.getAlpha();
      //console.log(this._alphabet);
  };
};

//
// generate quip per letter in name
//
exports.WordGenerator.prototype.generate = function (word) {
  console.log('In generate!! ' + word.toLocaleLowerCase() );
  var result = [];
  var currentLetter;
  for (var i = 0, len = word.length; i < len; i++) {
    currentLetter = word.charAt(i);
    !simpleIsAlpha(currentLetter) ? console.log("skip non-Alpha") : result.push(this._getWordByLetter(currentLetter.toLowerCase()))
  }

  return result;
};


//
// Get word by letter
//
exports.WordGenerator.prototype._getWordByLetter = function (letter) {
  var letterUsed = false;
  var totalNumberOfWords = this._alphabet[letter].length;
  var wordPosition;

  do
  {
    wordPosition = Random(0, totalNumberOfWords - 1);
    //console.log("wordPosition: ", wordPosition);
    if (this._wordsUsed[letter] && FindIndex(this._wordsUsed[letter], wordPosition) != null) {
      letterUsed = true;
    }
    else {
      letterUsed = false;
    }
  }
  while (letterUsed);

  if (!this._wordsUsed[letter]) {
    this._wordsUsed[letter] = []; //first time using this letter
  }
  
  this._wordsUsed[letter].push(wordPosition); // could improve - maybe insert ordered?!
  
  if (this._wordsUsed[letter].length == totalNumberOfWords) {
    this._wordsUsed[letter] = []; //reset the words used when it has used all words of a letter
  }
  return this._alphabet[letter][wordPosition];
};

//
// Aux methods
//
var Random = function(min, max) {
  var offset = min;
  var range = (max - min) + 1;

  var randomNumber = Math.floor(Math.random() * range) + offset;
  return randomNumber;
};

var FindIndex = function(array, value) {
  var ctr = null;
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return ctr;
};

function simpleIsAlpha(inp) {
  return /^[a-zA-Z]/.test(inp)
}:
