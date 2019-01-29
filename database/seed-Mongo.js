const mongoose = require('mongoose');
const Gallery = require('./models/gallery');
const { arrayGenerator } = require('./dataGenerator');

mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/galleries'), { useCreateIndex: true, useNewUrlParser: true });
let db = mongoose.connection;
let timerStart;
let timeElapsed;

try {
  db.dropCollection('galleries').then( () => {
    console.log('removed existing galleries table');
  }).catch(e => {
    throw e;
  });
 } catch (e) {
  console.log('there was an error');
 }

let round = 0;

const insertionFactory = () => {
  return new Promise(function(resolve, reject){
    db.collection('galleries').insertMany(arrayGenerator(), function(error, doc) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

const insertRounds = async () => {
  while (round < 100) {
    await insertionFactory();
    round += 1;
    if (round % 10 === 0) {
      console.log('Round:', round);
    }
  }

  timeElapsed = (Date.now() - timerStart) / 1000;

  mongoose.disconnect(() => {
    console.log(`10m records inserted in ${timeElapsed} seconds`);
  });
}

db.on('error', (err) => {
  console.log('error connecting', err);
});

db.once('open', () => {
  console.log('mongoose connected');
  timerStart = Date.now();
}).then(() => {
  insertRounds();
});
