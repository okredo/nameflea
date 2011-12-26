function Female() {
    if(false === (this instanceof Female)) {
        return new Female();
    }
}

Female.prototype.getAlpha = function() {
	var female = {"b": ["Badass", "Barmy", "Beautiful", "Berserk ", "Bewildered", "Bewitching smiler", "Billowy ", "Bite-sized", "Bizarre ", "Bloody wonderful", "Bonkers", "Bouncy", "Boundless ", "Brainy ", "Brave", "Breathtakingly wonderful", "Breezy ", "Bright ", "Bright as a button ", "Bright as a new pin ", "Broadcasting awesomeness 24hrs a day", "Bustling", "Busy as a one legged arse kicker ", "Busy being awesome"]};

        return female;
}

module.exports = Female;
