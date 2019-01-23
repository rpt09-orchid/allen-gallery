const fs = require('fs');
const csv = require('fast-csv');
const faker = require('faker');
const { photoGroups } = require('./photoGroups');

const csvStream = csv.createWriteStream({headers: true})
const writableStream = fs.createWriteStream("./my.csv");

