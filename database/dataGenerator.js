const { photoGroups } = require('./photoGroups');
const faker = require('faker');

let arr;
let idCounter = 1;

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
  return arr;
}

module.exports = {
  arrayGenerator
}