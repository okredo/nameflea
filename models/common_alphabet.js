function Common() {
    if(false === (this instanceof Common)) {
        return new Common();
    }
}

Common.prototype.getAlpha = function() {

var common = {"a": ["A little funny in the head", "Able to leap over buildings and very tall trees with ease", "Absolutely out of the ordinary", "Absurdly amazing", "Admirable in every possible way", "Adorable beyond comprehension", "Adventurous in many subtle ways", "Agonizingly lovely", "Alluring", "Always in fashion", "Amazing kisser", "Amazingly monkey-like", "Annoyingly fabulous", "Aromatic", "As happy as a dog with two tails", "As nutty as a fruitcake", "AS pretty as a picture", "As pure as the driven slush", "As pure as the driven snow", "Astonishing", "Attractive well beyond reasonable expectations", "Auspiciously amazing", "Awesomely awesome", "Awesomeness encapsulated", "Annoyingly lovely"],

"b": ["Bad", "Baaaaaaaad", "Badass (much worse that a honey badger)", "Barmy", "Beautiful beyond reason", "Beautiful nose", "Bewitching smiler", "Bloody wonderful", "Bonkers", "Breathtakingly blindingly brilliant", "Breathtakingly wonderful", "Breezy", "Bright", "Bright as a new pin", "Bringer of sunshine and all things that are good and that smell nice", "Broadcasting awesomeness 24 hours a day", "Busy as a one-legged arse-kicker", "Busy being awesome", "Beacon of weirdness", "Beacon of sanity"],

"c": ["Calming", "Capable", "Caring", "Ceaselessly epic", "Champion of good", "Champion of honor", "Champion of justice", "Champion of light", "Champion of the just", "Champion of virtue", "Charming beyond belief", "Cheerful", "Cherry on the cake of life", "Chocolate aficionado", "Classy", "Clever oh so clever", "Cleverness in all things", "Colorful", "Colossal", "Commands deep respect", "Complete", "Complete loony", "Completely and utterly flawless", "Confused (but in a good way)", "Cool", "Cool as a cucumber", "Courageous", "Crazy", "Crazy as a loon", "Cuddly", "Curiously cultured", "Curiously weird", "Curvy in interesting places", "Cute", "Cute as a bug's ear"],

"d": ["Daffy", "Dances weirdly", "Daydream believer", "Dreamer", "Daydreamer extraordinaire", "Dazzling", "Deep", "Defender of the kingdom", "Delicious", "Delightful", "Delightful to behold", "Delirious", "Deranged (but in a fully inspiring way)", "Determined", "Devastatingly gorgeous", "Devilish", "Diligent (about indulgence)", "Discreetly splendid", "Dizzying", "Dramatic (even Shakespeare would be impressed)", "Dynamic enough to power several electricity grids simultaneously"],

"e": ["Earsplittingly epic", "Easy", "Eatable", "Elfin", "Encapsulation of all things good", "Encapsulation of everything amazing about us humans ", "Enchanting", "Entertaining", "Enthusiastic about life", "Epic beyond belief", "Epicness encapsulated", "Epically epic", "Epically indulgent", "Epically lovely", "Epitome of fabulosity squared", "Ethereal", "Excellent", "Exciting", "Exotic", "Extremely hot", "Exuberant"],

"f": ["Fabulosity squared", "Fabulous", "Fabulous in a wine and chocolate kind of way", "Fantastic", "Fascinating", "Fears nothing (not even Voldemort)", "Fears nothing (not even pirates)", "Fearless", "Festive", "Fine as a frog's hair", "Flagrant indulger", "Flaky (in an inspiring way)", "Flawless", "Force of nature", "Fresh", "Fresh as a daisy", "Fresh as a mountain stream", "Friendliest person on the planet", "Funniest person in the universe", "Fuzzy"],

"g": ["Gaga", "Genius of everything", "Gentle", "Gets it", "Gifted", "Gives great hugs", "Glamorous", "Gleams like the moon on a dark winter's night", "Glistens like the sun on a calm mountain lake", "Glorious", "Glows in the light and in the dark", "God's gift to the universe", "Godly", "Goes weird at midnight", "Good as gold", "Gorgeous", "Greater than great", "Greatest specimen of a human being", "Groovy", "Guardian of light and justice and all things good", "Guru of gurus"],

"h": ["Hairstyle designed by fencing contractors", "Happy as a clam", "Hard to be equalled", "Has superpowers", "hears little voices", "Heart of solid gold", "Heart of solid chocolate", "Heavenly", "Here but not entirely", "Highly accomplished in the destruction of cake-based structures", "Hilarious", "Honest as the day is long", "Honorable", "Hot hot hot", "Humble slayer of dragons", "Huuuge heart", "Hypnotic"],

"i": ["Icon of the masses", "Illustrious", "Immense", "Impossibly brilliant", "Incandescent", "Incredible", "Incredibly lovely", "Inexplicably and randomly weird", "Inexplicably magnetic", "Infectiously amazing", "Insanely brilliant", "Insane (but in an inspiring way)", "Invincible", "Island of intelligence in a sea of silliness", "Island of light in a sea of darkness", "Island of sugar in a sea of salt", "Island of silliness in a sea of boring stuff", "Island of sanity"],

"j": ["Joyous", "Juicy", "Juicy when squeezed", "Just the kind of amazing person you want to be trapped on a desert island with", "Jumbled (every now and then)", "Just the kind of person you want to be seen with", "just the kind of person you want to spend time with", "Just the kind of person god envisaged when he created humans"],

"k": ["Kindhearted", "Kinky", "Knower of the truth", "Knowing", "Knower of everything"],

"l": ["Legendary", "Lethal", "Lighthouse of love", "Lightning wit", "Like a fine wine", "Like a fresh peach", "Loveliest person on the planet", "Lunatic", "Lush", "Loved by all creatures great and small (including ants and amoebas)"],

"m": ["Mad as a hatter", "Mad as a march hare", "Mad as a wet hen", "Made from solid gold", "Magical", "Magnificent", "Majestic", "Makes good tea", "Makes the world a smilier place", "Makes the world a smellier place", "Makes the world a funnier place", "Makes the world a happier place", "Makes the world a sunnier place", "Makes the world a sillier place", "Makes the world a less sober place", "Marvelous", "Maximum output of awesomeness", "meandering (but in a totally inspiring way)", "Mega sex symbol", "Mercurial", "Mind-blowing to be around", "Mind-blowingly bright", "Momentous", "Multi-layered (a bit like a car-park)", "Multi-talented", "Mysteriously wonderful"],

"n": ["Never fails to surprise", "Never dull", "Never boring", "Never knowingly normal", "Not really completely normal", "Not necessarily playing with a full bag of marbles", "Nauseatingly superb", "Not necessarily playing with a full pack of cards", "Nightmare dancer", "No sense of social embarrassment", "Nobel prize-winning potential", "Normally normal but very often not", "Not at all normal", "Not indulgent in any way at al (no no no)", "Nothing short of spectacular", "Nuts", "Nutty"],

"o": ["Occasionally weird", "Occasionally normal", "Off-the-wall", "Offensively attractive", "Often deeply misunderstood (most geniuses are)", "Once-in-a-generation type person", "Obviously absurdly talented", "Obviously would be a multiple Nobel prize winner if could be bothered", "Often very hungry", "One of a kind", "One of awesomeness", "One of grace", "Oozes charm", "Oozes strength", "Oozes charisma", "Outrageously wonderful", "Outstandingly lovely"],

"p": ["Painfully amazing", "Painfully awesome", "Paragon of honor", "Paragon of integrity", "Paragon of justice", "Paragon of respect", "Paragon of virtue", "Paragon of indulgence", "Partial to all the good things in life", "Party animal", "Perfect (seriously)", "Potential savior of the universe", "Potion maker", "Purveyor of awesomeness", "Powerful", "Powerful in battle", "Preposterously lovely", "Protector of justice", "Protector of the realm", "Pure perfection", "Purveyor of pure inspiration"],

"q": ["Queer as chocolate orange", "Questionable restraint", "Quick-witted", "Quiet yet dazzling charm", "Quintessentially wonderful", "Quirky when there's a full moon", "Quite amazing", "Quite brilliant basically", "Quite epic", "Quite the kind of person who makes life on this planet amazing", "Quixotic"],

"r": ["Radiates light", "Radiates love", "Radiating source of light", "Rampagingly hot", "Rampantly gorgeous", "Rapier wit and absurd charm", "Rare mix of brightness and radiance", "Raspberry in the pavlova that is life", "Ready for anything", "Real", "Remarkable", "Real really really really really wonderful", "Resonant", "Righteous", "Royal blood in there somewhere for sure"],

"s": ["Sanctified gatekeeper of all that is good", "Sanctified gatekeeper of virtue", "Scintillating", "Sexy on the outside but supersexy on the inside", "Shadow destroyer", "Shockingly incredible", "Simply extraordinary", "Slightly more interesting than your average garden pond", "Smells awesome", "Smells like heaven", "Smile is brighter than a moonbeam", "Smooth as a baby's bottom", "So amazing it's almost impossible to believe", "So fantastic it's almost quite scary", "So good-looking that it seems to be an optical illusion", "So lovely that it should almost be illegal", "So sexy that it should almost be illegal", "So talented that it's actually painful", "So unique that you will never understand", "Solid", "Sometimes a little weird", "Special", "Spectacular", "Spicy", "Splendid", "Squidgy inside", "Squidgy sometimes", "Steadfast", "Steamy specimen", "Streetwise", "Strong", "Stupendous", "Stupidly sexy", "Sunny", "Super-fantastic", "Supercalifragilisticexpialidocious", "Superb", "Supernatural", "Supreme", "Surrounded by a legendary glow of awesomeness", "Sweet as honey pie"],

"t": ["Talented", "Tasteful", "Tasty", "Tender", "terrible singer", "Terrifyingly awesome", "The people's champion", "The source of all good in the world", "Thoughtful", "To die for", "Total perfection in every respect", "Towering personality", "Total powerhouse", "Totally awesome", "Totally present (so in the moment that the moment feels long, leisurely, and a little bit magic)", "Totally wonderful", "Tremendous", "True revolutionary"],

"u": ["Unbelievably wonderful", "Uber-cool", "Uber-wicked", "Uber-sexy", "Understated elegance", "Understated excellence", "Unique beyond comprehension", "Unlike any other human", "Unlike anyone you have ever met before", "Upbeat and inspiring"],

"v": ["Valuable", "Vampire slayer", "Vanquisher of darkness", "Vanquisher of all evil", "Very very very lovely", "Very very self-disciplined", "Very very very sexy", "Vivaciously vivacious", "Voracious kisser"],

"w": ["Wacky", "Warm", "Warrior genes", "Weird", "Weird habits", "Whimsical", "Wicked", "Wine monster", "Wine fined", "Wistful", "Wonderful", "Wonderfulness encapsulated", "Work of living art", "World's loveliest person"],

"x": ["XXX-rated", "Xtraordinarily wonderful", "Xtremely lovely", "Xcellent in every possible manner", "Xhaustingly epic", "Xotic and sexy", "Xcellent and superbly amazing"],

"y": ["Youthful", "Yummy", "Yes, god did endow a single human with such multi-varied talents", "Yes, god did endow a single human with such a body", "Yes, god did endow a single human with such charm and charisma", "Yes, god did endow a single human with such noble wisdom"],

"z": ["Zany", "Zesty", "Zombie-hunter"]
}
	return common;
}

module.exports = Common;

