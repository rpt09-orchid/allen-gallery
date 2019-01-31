// experiment to run performance query time
const Gallery = require('./models/gallery');

let t0 = performance.now();
let t1;
Gallery.findByID(10000000, (err, response) => {
  if (err) {
    console.log('ERROR', err);
  } else {
    t1 = performance.now();
    console.log('RESPONSE:', response);
    console.log("MongoDB query took" + (t1 - t0) + " milliseconds.");
  }
});
