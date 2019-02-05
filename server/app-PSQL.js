const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const { Client } = require('pg');

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
});

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(morgan('tiny'));
} else {
  app.use(morgan('dev'));
}

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public'), { maxAge: '1y' }));
app.use('/:id', express.static(path.join(__dirname, '/../public'), { maxAge: '1y' }));

app.get('/photos/:id', (req, res) => {
  client.query('SELECT photos FROM galleries g WHERE g.id = $1', [req.params.id])
  .then(result => {
    const gallery = {
      id: req.params.id,
      photos: result.rows[0].photos
    }
    res.json({ data: [gallery] })
  }
  )
  .catch(e => console.error(e.stack))
});

app.post('/photos/:id', (req, res) => {
  let url = req.body.url;
  res.sendStatus(200);
  // client.query('UPDATE galleries g SET photos = jsonb_set() WHERE g.id = $1', [req.params.id])
  // .then(result => {

  // })
  // .catch(e => console.error(e.stack))
});

module.exports = {
  app,
  client
};