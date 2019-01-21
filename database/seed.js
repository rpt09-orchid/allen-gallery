const faker = require('faker');
const Gallery = require('./models/gallery');
const mongoose = require('mongoose');
const { photoGroups } = require('./photoGroups');

mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/galleries'), { useCreateIndex: true, useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (err) => {
  console.log('error connecting to MongoDB', err);
})
db.once('open', () => {
  console.log('mongoose connected');
});

for (let i = 1; i < 10001; i++) {

  let gallery = {
    id: i,
    photos: faker.random.arrayElement(photoGroups)
  }

  if (i === 10000) {
    Gallery.insertOne(gallery, (err) => {
      if (err) {
        console.log('error adding Gallery', err);
      }
      mongoose.disconnect();
    })
  } else {
    Gallery.insertOne(gallery, (err) => {
      if (err) {
        console.log('error adding Gallery', err);
      }
    });
  }
}