require('dotenv').config()
const db = require('./db')
const Promise = require('bluebird');
const readFile = Promise.promisify(require("fs").readFile);
const utils = require('./dbUtils.js');
const _ = require('lodash');

const productionBucket = `https://s3.us-east-2.amazonaws.com/elasticbeanstalk-us-east-2-785620446758/property_images/`;

const Schema = mongoose.Schema;
const PropertySchema = new Schema({
  id:  String,
  photos: [{ id: String, location: String }]
});

const Property = mongoose.model('Property', PropertySchema);
const db = mongoose.model('Property');

// Helpers to generate 100 records
let generateProperties = (qty) => {
  const properties = [];
  for (let i = 1; i < 101; i++) {
    const photos = generatePhotos(1);
    const property = {
      id:  '' + i,
      photos: photos
    }
    properties.push(property)
  }
  return properties;
}

let generatePhotos = (qty) => {
  const photos = [];
  for (let i = 0; i < qty; i++) {
    const id = generateRandomId();
    const location = 'https://picsum.photos/800/800/?image=172';
    const newPhoto = {
      id: '' + id,
      location: location
    }
    photos.push(newPhoto);
  }
  return photos;
}

let generateRandomId = () => {
  return Math.floor(Math.random() * 90000) + 10000;
}

insertProperties();

//TEST
