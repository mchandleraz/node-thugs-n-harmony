const fs = require('fs');
const Speaker = require('speaker');
const lame = require('lame');

module.exports = function (inputFilePath) {
	var decoder = new lame.Decoder;
	var speaker = new Speaker;

	fs.createReadStream(inputFilePath)
		.pipe(decoder)
		.on('format', console.log)
		.pipe(speaker);
}