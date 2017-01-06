const audioPlayer = require('./src/audio-player');
const schedule = require('node-schedule');

// 6 AM, first day of the month
const firstOfDaMonth = '0 6 1 * *';

schedule.scheduleJob(firstOfDaMonth, audioPlayer.playMp3.bind(null, process.argv[2]));