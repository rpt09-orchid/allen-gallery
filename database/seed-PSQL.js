require('dotenv').config();
const { Client } = require('pg');
const { arrayGenerator } = require('./dataGenerator');
const path = require('path');

const fs = require('fs');
const csv = require('fast-csv');

let timerStart;
let timeElapsed;

const csvWriter = () => {
  const ws = fs.createWriteStream(path.join(__dirname, '/test.csv'));
  const options = {
    headers: true,
    transform: (row) => {
      return {
        id: row.id,
        photos: JSON.stringify(row.photos)
      };
    }
  };
  return new Promise((resolve, reject) => {
    csv.write(arrayGenerator(), options).pipe(ws)
      .on('finish', () => {
        resolve();
      })
      .on('error', (error) => {
        console.log('ERROR creating array', error);
        reject();
      });
  });
}

const deleteFile = () => {
  return new Promise((resolve, reject) => {
    fs.unlink(path.join(__dirname, 'test.csv'), (err) => {
      if (err) {
        console.log('error deleting file');
        reject();
      } else {
        resolve();
      }
    });
  });
}

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

( async () => {
  await client.connect();
  console.log('Connected to PostgreSQL database');
  timerStart = Date.now()
  await client.query('DROP TABLE IF EXISTS galleries')
  await client.query('CREATE TABLE IF NOT EXISTS galleries (id serial PRIMARY KEY, photos JSON NOT NULL)');
  try {
    let rounds = 0;
    while (rounds < 100) {
      await csvWriter();
      await client.query(`COPY galleries(id,photos) FROM '${path.join(__dirname, 'test.csv')}' CSV HEADER`);
      await deleteFile();
      rounds += 1;
      if (rounds % 10 === 0) {
        console.log('Round:', rounds);
      }
    }

    await client.query('SELECT * FROM galleries WHERE id = 10000000')
      .then(res => {
        console.log('Did I do the thing?');
        console.log(res.rows[0]);
      })
      .catch(e => console.error(e.stack));
} catch (error) {
    throw error;
  }
  await client.end();

  timeElapsed = (Date.now() - timerStart) / 1000;
  console.log(`time elapased: ${timeElapsed} seconds`);
})().catch(e => console.error(e));