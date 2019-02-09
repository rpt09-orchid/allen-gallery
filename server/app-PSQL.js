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

// app.use('/', express.static(path.join(__dirname, '/../public'), { maxAge: '1y' }));
app.get('/', (req, res) => {
  res.redirect('/1');
});
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

app.put('/photos/:id', (req, res) => {
  let url = req.body.url;
  client.query('SELECT photos FROM galleries g WHERE g.id = $1', [req.params.id])
  .then(result => {
    let { photos } = result.rows[0];
    photos[0].location = url;
    return photos;
  })
  .then( photos => {
    client.query('UPDATE galleries g SET photos = $2 WHERE g.id = $1', [req.params.id, JSON.stringify(photos)])
    .then(()=> {
      res.sendStatus(200);
    })
    .catch(error=> {
      res.status(404).send({ error });
    })
  })
  .catch(error => {
    res.status(404).send({ error });
  });
});

module.exports = {
  app,
  client
};