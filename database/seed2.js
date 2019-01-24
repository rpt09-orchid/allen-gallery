const faker = require('faker');
const Gallery = require('./models/gallery');
const mongoose = require('mongoose');
const { photoGroups } = require('./photoGroups');

mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/galleries'), { useCreateIndex: true, useNewUrlParser: true });
const db = mongoose.connection;

let count = 1;
let gallery;
let arr;
async function processArray() {
  for (let j of [...Array(10).keys()]) {
    arr = [];
    for (let i of [...Array(100).keys()]) {
      gallery = {
        id: count,
        photos: faker.random.arrayElement(photoGroups)
      }
      arr.push(gallery);
      count += 1;
      await Gallery.GalleryModel.insertMany(arr)
      .then((err, doc) => {
        if (err) {
          throw err;
        }
        if (j === 9) {
          mongoose.disconnect();
        }
      });
    }
  }
}

db.on('error', (err) => {
  console.log('error connecting to MongoDB', err);
})
db.once('open', () => {
  console.log('mongoose connected');
  processArray();

  // for (let j = 0; j < 10000; j++) {
  //   let arr = [];
  //   for (let i = 1; i < 101; i++) {
      // gallery = {
      //   id: count,
      //   photos: faker.random.arrayElement(photoGroups)
      // }
      // arr.push(gallery);
      // count += 1;
  //   }



});