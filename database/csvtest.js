const fs = require('fs');
const csv = require('fast-csv');
const faker = require('faker');
const { photoGroups } = require('./photoGroups');

const csvStream = csv.createWriteStream({headers: true})
const writableStream = fs.createWriteStream("./my.csv");

writableStream.on("finish", function(){
  console.log("DONE!");
});

csvStream.pipe(writableStream);

csvStream.write(['id', 'photos']);

for (let i = 1; i < 101; i++) {
  gallery = {
    id: i,
    photos: JSON.stringify(faker.random.arrayElement(photoGroups))
  }
  csvStream.write(gallery);
  if (i === 100) {
    csvStream.end();
  }
}

