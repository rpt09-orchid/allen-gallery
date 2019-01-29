require('dotenv').config();
const { Client } = require('pg');
const { arrayGenerator } = require('./dataGenerator');

let timerStart;
let timeElapsed;

// connect to postgres db
// create csv file with 100k lines
// copy the csv file to postgres - WAIT UNTIL IT IS DONE
// begin the process again by WRITING OVER THE CSV FILE


// const csvStream = csv.createWriteStream({headers: true})
const ws = fs.createWriteStream("./test.csv");

ws.on("finish", function(){
  console.log("DONE!");
});

csvStream.write(['id', 'photos']);

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

      });
  })
  .catch(error => {
    console.log(error);
  });


const insertionFactory = () => {
  return new Promise(function(resolve, reject){
    db.collection('galleries').insertMany(arrayGenerator(), function(error, doc) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

const insertRounds = async () => {
  while (round < 100) {
    await insertionFactory();
    round += 1;
    if (round % 10 === 0) {
      console.log('Round:', round);
    }
  }

  timeElapsed = (Date.now() - timerStart) / 1000;

  mongoose.disconnect(() => {
    console.log(`10m records inserted in ${timeElapsed} seconds`);
  });
}

db.on('error', (err) => {
  console.log('error connecting', err);
});

db.once('open', () => {
  console.log('mongoose connected');
  timerStart = Date.now();
}).then(() => {
  insertRounds();
});

const createCSV = () => {
  return new Promise( ( resolve, reject ) => {
    csv.write(arrayGenerator(), {
      headers: true,
      transform: function(row) {
          return {
              id: row.id,
              photos: JSON.stringify(row.photos)
          };
      }}
    ).pipe(ws);
  })
}
