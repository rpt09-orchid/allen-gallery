const faker = require('faker');
const Gallery = require('./models/gallery');
const mongoose = require('mongoose');
const { photoGroups } = require('./photoGroups');

mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/galleries'), { useCreateIndex: true, useNewUrlParser: true });
const db = mongoose.connection;

let count = 1;
let gallery;

db.on('error', (err) => {
  console.log('error connecting to MongoDB', err);
})
db.once('open', () => {
  console.log('mongoose connected');
  for (let j = 0; j < 100; j++) {
    let arr = [];
    for (let i = 1; i < 100; i++) {
      gallery = {
        id: count,
        photos: faker.random.arrayElement(photoGroups)
      }
      arr.push(gallery);
      count += 1;
    }


    // Gallery.GalleryModel.insertMany(arr, (error) => {
    //   if (error) {
    //     console.log('error adding gallery', err);
    //   }
    //   mongoose.disconnect();
    // });
    Gallery.insertMany(arr, (error) => {
      if (error) {
        console.log('error adding gallery', err);
      }
      if (j === 99) {
        mongoose.disconnect();
      }
    });
  }
});