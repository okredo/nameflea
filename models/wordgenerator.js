exports.WordGenerator = function() {

  this._wordsUsed = {};

  // pulls this._alphabet but it must also be included "above"
  //var _alphabet = WordGenerator.prototype._alphabet; 
  //_alphabet.apply(this, []); // call original
  //this._alphabet = _alphabet;

this._alphabet = {
"a": ["Acceptable ", "Accessible ", "Adaptable ", "Admirable in every way", "Adorable", "Adventurous in many subtle ways", "Agonizingly lovely", "Agreeable", "Alert ", "Alluring ", "Amazing", "Amazing kisser", "Ambitious ", "Amusing", "Animated ", "Annoyingly fabulous", "Aromatic ", "As happy as a dog with two tails ", "As happy as a pig in shit ", "As nice as ninepence ", "As nutty as a fruit cake ", "As playful as a kitten ", "As pretty as a picture ", "As pure as the driven slush ", "As pure as the driven snow ", "Astonishing ", "Attractive", "Auspicious ", "Available in many ways", "Aware ", "Awesome", "Awesomely awesome", "Awesomeness encapsulated", "Absolutely out of the ordinary", "Acceptable ", "Accessible ", "Adaptable ", "Admirable in every way", "Adorable", "Adventurous in many subtle ways", "Agonizingly lovely", "Agreeable", "Alert ", "Alluring ", "Amazing", "Amazing kisser", "Ambitious ", "Amusing", "Animated ", "Annoyingly fabulous", "Aromatic ", "As happy as a dog with two tails ", "As happy as a pig in shit ", "As nice as ninepence ", "As nutty as a fruit cake ", "As playful as a kitten ", "As pretty as a picture ", "As pure as the driven slush ", "As pure as the driven snow ", "Astonishing ", "Attractive", "Auspicious ", "Available in many ways", "Aware ", "Awesome", "Awesomely awesome", "Awesomeness encapsulated"],
        
"b": ["Badass", "Barmy", "Beautiful", "Berserk ", "Bewildered", "Bewitching smiler", "Billowy ", "Bite-sized", "Bizarre ", "Bloody wonderful", "Bonkers", "Bouncy", "Boundless ", "Brainy ", "Brave", "Breathtakingly wonderful", "Breezy ", "Bright ", "Bright as a button ", "Bright as a new pin ", "Broadcasting awesomeness 24hrs a day", "Bustling", "Busy as a one legged arse kicker ", "Busy being awesome"],

"c": ["Capable ", "Caring", "Ceaselessly epic", "Charming beyond belief", "Cheerful ", "Chocolate aficionado", "Classy ", "Clever oh so clever", "Cluttered", "Colorful ", "Colossal", "Complete", "Complete loony", "Completely and utterly flawless", "Complex", "Confused (but in a good way)", "Cool", "Cool as a cucumber ", "Courageous ", "Crazy ", "Crazy as a loon ", "Cuddly", "Cultured ", "Curious ", "Curiously weird", "Curvy", "Cute", "Cute as a bug's ear"],

"d": ["Dances weirdly", "Daydreamer extraordinaire", "Dazzling", "Deep", "Definitely a hunk", "Delicious", "Delightful ", "Delightful to behold", "Delirious", "Deranged (in a way that is inspiring)", "Determined ", "Devastatingly gorgeous", "Devilish ", "Diligent ", "Discreetly splendid", "Dizzy", "Dramatic ", "Dynamic "],

"e": ["Easy", "Eatable ", "Elfin ", "Encapsulation of all things good", "Enchanting ", "Entertaining ", "Enthusiastic about life", "Epic", "Epic beyond belief", "Epically epic", "Epically indulgent", "Epically lovely", "Epicness encapsulated", "Epitome of fabulosity squared", "Ethereal ", "Excellent", "Exciting", "Exotic ", "Exuberant "],

"f": ["Fabulous ", "Fantastic ", "Fascinating", "Fearless ", "Festive ", "Fine as frog's hair ", "Fine really", "Flagrant indulger", "Flaky (in an inspiring way)", "Flawless ", "Force of nature", "Fresh", "Fresh as a daisy ", "Fresh as a mountain stream ", "Friendly ", "Funniest person in the universe", "Funny ", "Fuzzy"],

"g": ["Genius of everything", "Gentle", "Gets it", "Gifted", "Glamorous ", "Gleaming ", "Glistening", "Glorious ", "Glows", "Glows in the dark", "Godly ", "Goes weird at midnight", "Good as gold ", "Gorgeous ", "Great", "Greatest specimen of a human being", "Groovy ", "Gugu of all gurus"],

"h": ["Happy", "Happy as a clam ", "Hard to be equalled", "Has superpowers", "Hears little voices", "Heart of chocolate", "Heavenly", "Here but not entirely", "Hilarious ", "Honest as the day is long ", "Honorable ", "Hot", "Huuuuuuuge heart", "Hypnotic "],

"i": ["Immense", "Impossibly brilliant", "Incandescent ", "Incredible", "Incredibly lovely", "Inexplicably and randomly weird", "Infectuously amazing", "Invincible ", "Island of intelligence in a sea of silliness", "Island of sanity"],

"j": ["Juicy", "Jumbled (every now and then)", "Just the kind of person you want to be trapped on a desert island with", "Juicy when squeezed"],

"k": ["Kinky", "Knower of everything", "Knowing"],

"l": ["Lethal ", "Lighthouse of love", "Lighting wit", "Like a fine wine (not so easy to define)", "Loveliest guy on the planet", "Lovely ", "Lunatic"],

"m": ["Mad as a march hare ", "Mad as a wet hen ", "Made from gold", "Magical ", "Magnificent", "Magnifique", "Majestic ", "Makes the wold a smilier place", "Makes the world a better place", "Makes the world a sunnier place", "Maniacal (in an inspiring way)", "Marvelous", "Mauseatingly superb ", "Maximum output of awesomeness", "Meandering", "Mercurial", "Messy", "Mind-blowing to be around", "Mind-blowingly bright", "Momentous ", "Multi-talented", "Mysterious"],

"n": ["Never overrated", "Nobel prize-winning potential", "Not indulgent", "Nuts", "Nutty"],

"o": ["Off the wall", "Offensively attractive", "Often deeply misunderstood", "Often very hungry", "One of a kind", "One of awesomeness", "One of grace", "Oozes charm", "Outrageous ", "Outstanding"],

"p" : ["Particularly fond of chocolate", "Perfect in every possible way", "Protector of the realm"],

"q" : ["Queer as chocolate orange", "Questionable restraint", "Quick-witted"],

"r" : ["Righteous", "Ready for anything", "Really weird"],

"s" : ["Shockingly incredible", "Slayer of Dragons", "So amazing it's almost impossible to believe"],

"t" : ["Terrifyingly awesome", "Totally epic", "True revolutionary"],

"u" : ["Unique beyond comprehension", "Uber cool", "Upbeat"],

"v" : ["Voracious kisser", "Valuable beyond belief", "very very very sexy"],

"w" : ["Wise, powerful and brave", "Wolf-like", "Whoever moors at his island is likely to be struck by the sheer radiance of his being"],

"x" : ["X-rated", "XX-rated", "XXX-rated"],

"y" : ["Yes, he's amazing", "Youthful", "Yummy"],

"z" : ["Zany", "Zombie-hunter", "Zippy"]

  }
};

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


// Aux methods

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
}

