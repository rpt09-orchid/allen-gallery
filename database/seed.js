const faker = require('faker');
const Gallery = require('./models/gallery');
const mongoose = require('mongoose');
const { photoGroups } = require('./photoGroups');

mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/galleries'), { useCreateIndex: true, useNewUrlParser: true });
const db = mongoose.connection;

let counter = 0;
// let arr = [];
let gallery;

db.on('error', (err) => {
  console.log('error connecting to MongoDB', err);
})
db.once('open', async () => {
  console.log('mongoose connected');
  // for (let i = 1; i < 101; i++) {
  //   gallery = {
  //     id: i,
  //     photos: faker.random.arrayElement(photoGroups)
  //   }
  //   arr.push(gallery);
  // }

  // Gallery.insertMany(arr, (error) => {
  //   if (error) {
  //     console.log('error adding gallery', err);
  //   }
  //   mongoose.disconnect();
  // })

  for (let j )
});