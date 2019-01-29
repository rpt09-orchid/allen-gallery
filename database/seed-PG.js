const { Client } = require('pg');
const fs = require('fs');
const csv = require('fast-csv');
const { arrayGenerator } = require('./dataGenerator');

const csvStream = csv.createWriteStream({headers: true})
const ws = fs.createWriteStream("./test.csv");

ws.on("finish", function(){
  console.log("DONE!");
});

// csvStream.write(['id', 'photos']);
csv.write(arrayGenerator(), {
  headers: true,
  transform: function(row) {
      return {
          id: row.id,
          photos: JSON.stringify(row.photos)
      };
  }}).pipe(ws);

// const client = new Client({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   databse: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT
// });

// await client.connect();

