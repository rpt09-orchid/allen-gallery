require('dotenv').config();
const { Client } = require('pg');
const { arrayGenerator } = require('./dataGenerator');
const path = require('path');

const fs = require('fs');
const csv = require('fast-csv');

const ws = fs.createWriteStream("./test.csv");

let timerStart;
let timeElapsed;

const csvWriter = () => {
  const options = {
    headers: true,
    transform: (row) => {
      return {
        id: row.id,
        photos: JSON.stringify(row.photos)
      };
    }}

  return new Promise((resolve, reject) => {

    csv.write(arrayGenerator(), options).pipe(ws).on("finish", () => {
        console.log("DONE!");
        resolve();
      });

  });
}

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
  // console.log('Connected to PostgreSQL database');
  // timerStart = Date.now()
  // await client.query('DROP TABLE IF EXISTS galleries')
  // await client.query('CREATE TABLE IF NOT EXISTS galleries (id serial PRIMARY KEY, photo JSON NOT NULL)');
  try {
    await csvWriter();
  } catch (error) {
    throw error;
  }
  console.log('done, bye bye');
  // await client.end();
})().catch(e => console.error(e));
