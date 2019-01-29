require('dotenv').config();
const { Client } = require('pg');
const fs = require('fs');
const csv = require('fast-csv');
const { arrayGenerator } = require('./dataGenerator');

let timerStart;
let timeElapsed;

// const csvStream = csv.createWriteStream({headers: true})
// const ws = fs.createWriteStream("./test.csv");

// ws.on("finish", function(){
//   console.log("DONE!");
// });

// csvStream.write(['id', 'photos']);
// csv.write(arrayGenerator(), {
//   headers: true,
//   transform: function(row) {
//       return {
//           id: row.id,
//           photos: JSON.stringify(row.photos)
//       };
//   }}).pipe(ws);

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

client.connect()
  .then( () => {
    console.log('Connected to PostgreSQL database');
    timerStart = Date.now();
    client.query('DROP TABLE IF EXISTS galleries')
      .then( ()=> {
        client.query('CREATE TABLE IF NOT EXISTS galleries (id serial PRIMARY KEY, photo JSON NOT NULL)');
      })
      .then( () => {
        arrayGenerator().forEach(id => {
          insertionFactory(JSON.stringify(id.photos));
        });
      });
  })
  .catch(error => {
    console.log(error);
  });

const insertionFactory = (photosArray) => {
  return new Promise(function(resolve, reject) {
      client.query(`INSERT INTO galleries (photo) VALUES ($1) RETURNING id`, [photosArray], (err, res) => {
          if (err) {
              console.log(err);
              reject(err);
          } else {
              // console.log(res.fields);
              resolve();
          }
      })
  });
}