const mongoose = require('mongoose');
const Gallery = require('./models/gallery');
const { arrayGenerator } = require('./dataGenerator');

mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/galleries'), { useCreateIndex: true, useNewUrlParser: true });
let db = mongoose.connection;

let round = 0;

const insertionFactory = () => {
  return Gallery.GalleryModel.insertMany(arrayGenerator()).catch(error => {
    console.log('Error inserting records', error);
    mongoose.disconnect();
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

  mongoose.disconnect(() => {
    console.log('10m records inserted');
  });
}

db.on('error', (err) => {
  console.log('error connecting', err);
});
db.once('open', () => {
  console.log('mongoose connected');
  insertRounds();
});
