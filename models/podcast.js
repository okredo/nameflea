function Podcast() {
    if(false === (this instanceof Podcast)) {
        return new Podcast();
    }
}

Podcast.prototype.download = function(episode) {
    //console.log('Downloading: ' + episode);
}

module.exports = Podcast;
