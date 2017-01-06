const fs = require('fs');
const Speaker = require('speaker');
const lame = require('lame');

function AudioPlayer() {
  return Object.create({
		decoder: new lame.Decoder,
		speaker: new Speaker,
		playMp3: function(inputFilePath) {
			fs.createReadStream(inputFilePath)
				.pipe(this.decoder)
				.on('format', console.log)
				.pipe(this.speaker);
		}
	});
}

module.exports = AudioPlayer();