require('dotenv').config();
const { Client } = require('pg');
const { arrayGenerator } = require('./dataGenerator');
const path = require('path');
const csvdata = require('csvdata');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './test.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'photos', title: 'photos'}
  ]
});

let timerStart;
let timeElapsed;

// connect to postgres db
// create csv file with 100k lines
// copy the csv file to postgres - WAIT UNTIL IT IS DONE
// begin the process again by WRITING OVER THE CSV FILE

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

( async () => {
  // await client.connect();
  console.log('Connected to PostgreSQL database');
  timerStart = Date.now()
  // await client.query('DROP TABLE IF EXISTS galleries')
  // await client.query('CREATE TABLE IF NOT EXISTS galleries (id serial PRIMARY KEY, photo JSON NOT NULL)');
  try {
    // console.log(arrayGenerator());
    // await csvWriter.writeRecords(arrayGenerator());
    await csvdata.write('./test.csv', arrayGenerator(), {header: 'id,photos'})
  } catch (error) {
    throw error;
  }
  console.log('done, bye bye');
  // await client.end();
})().catch(e => console.error(e));



// const insertionFactory = () => {
//   return new Promise(function(resolve, reject){
//     db.collection('galleries').insertMany(arrayGenerator(), function(error, doc) {
//       if (error) {
//         console.log(error);
//         reject(error);
//       } else {
//         resolve();
//       }
//     });
//   });
// }

// const insertRounds = async () => {
//   while (round < 100) {
//     await insertionFactory();
//     round += 1;
//     if (round % 10 === 0) {
//       console.log('Round:', round);
//     }
//   }

//   timeElapsed = (Date.now() - timerStart) / 1000;

//   mongoose.disconnect(() => {
//     console.log(`10m records inserted in ${timeElapsed} seconds`);
//   });
// }

// db.on('error', (err) => {
//   console.log('error connecting', err);
// });

// db.once('open', () => {
//   console.log('mongoose connected');
//   timerStart = Date.now();
// }).then(() => {
//   insertRounds();
// });

