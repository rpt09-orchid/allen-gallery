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
  for (let i = 0; i < 10000; i++) {
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
  return Gallery.GalleryModel.insertMany(arr);
}

const generateAndInsert= async () => {
  while (round < 1000) {
    await insertionFactory();
    round += 1;
    if (round % 100 === 0) {
      console.log(round);
    }
  }
}

db.on('error', (err) => {
  console.log('error connecting', err);
});
db.once('open', () => {
  console.log('mongoose connected');
  generateAndInsert();
});
