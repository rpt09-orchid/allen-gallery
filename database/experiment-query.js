// experiment to run performance query time
const mongoose = require('mongoose');
const Gallery = require('./models/gallery');
const { performance } = require('perf_hooks');

mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/galleries'), { useCreateIndex: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (err) => {
  console.log('error connecting', err);
});
db.once('open', () => {
  console.log('mongoose connected');
  let t0 = performance.now();
  let t1;
  Gallery.findByID(10000000, (err, response) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      t1 = performance.now();
      console.log('RESPONSE:', response);
      console.log("MongoDB query took " + (t1 - t0) + " milliseconds.");
      mongoose.disconnect();
    }
  });
});


