function Male() {
    if(false === (this instanceof Male)) {
        return new Male();
    }
}

Male.prototype.getAlpha = function() {
        
	var male = {"a": ["Acceptable ", "Accessible ", "Adaptable ", "Admirable in every way", "Adorable", "Adventurous in many subtle ways", "Agonizingly lovely", "Agreeable", "Alert ", "Alluring ", "Amazing", "Amazing kisser", "Ambitious ", "Amusing", "Animated ", "Annoyingly fabulous", "Aromatic ", "As happy as a dog with two tails ", "As happy as a pig in shit ", "As nice as ninepence ", "As nutty as a fruit cake ", "As playful as a kitten ", "As pretty as a picture ", "As pure as the driven slush ", "As pure as the driven snow ", "Astonishing ", "Attractive", "Auspicious ", "Available in many ways", "Aware ", "Awesome", "Awesomely awesome", "Awesomeness encapsulated", "Absolutely out of the ordinary", "Acceptable ", "Accessible ", "Adaptable ", "Admirable in every way", "Adorable", "Adventurous in many subtle ways", "Agonizingly lovely", "Agreeable", "Alert ", "Alluring ", "Amazing", "Amazing kisser", "Ambitious ", "Amusing", "Animated ", "Annoyingly fabulous", "Aromatic ", "As happy as a dog with two tails ", "As happy as a pig in shit ", "As nice as ninepence ", "As nutty as a fruit cake ", "As playful as a kitten ", "As pretty as a picture ", "As pure as the driven slush ", "As pure as the driven snow ", "Astonishing ", "Attractive", "Auspicious ", "Available in many ways", "Aware ", "Awesome", "Awesomely awesome", "Awesomeness encapsulated"]
};
        return male;
}

module.exports = Male;

