const mongoose = require('mongoose');
const faker = require('faker');
const Gallery = require('./models/gallery');
const { photoGroups } = require('./photoGroups');

mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/galleries'), { useCreateIndex: true, useNewUrlParser: true });
let db = mongoose.connection;

let idCounter = 1;
let arr;
let round = 0;

const arrayGenerator = () => {
  arr = [];
  for (let i = 0; i < 100000; i++) {
    gallery = {
      id: idCounter,
      photos: faker.random.arrayElement(photoGroups)
    }
    arr.push(gallery);
    idCounter += 1;
  }
}

const insertionFactory = () => {
  arrayGenerator();
  return Gallery.GalleryModel.insertMany(arr).catch(error => {
    console.log('Error inserting records', error);
    mongoose.disconnect();
  });
}

const generateAndInsert= async () => {
  while (round < 100) {
    await insertionFactory();
    round += 1;
    if (round % 10) {
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
  generateAndInsert();
});
