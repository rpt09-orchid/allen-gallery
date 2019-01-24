const mongoose = require('mongoose');
const faker = require('faker');
const Gallery = require('./models/gallery');
const { photoGroups } = require('./photoGroups');

mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/galleries'), { useCreateIndex: true, useNewUrlParser: true });
let db = mongoose.connection;

let idCounter = 1;
let arr;
let round = 0;

var arrayGenerator = () => {
  arr = [];
  for (let i = 0; i < 1000; i++) {
    gallery = {
      id: idCounter,
      photos: faker.random.arrayElement(photoGroups)
    }
    arr.push(gallery);
    idCounter += 1;
  }
}

let insertionFactory = () => {
  arrayGenerator();
  return Gallery.GalleryModel.insertMany(arr);
}

let generateAndInsert= async () => {
  while(round < 10000){
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
