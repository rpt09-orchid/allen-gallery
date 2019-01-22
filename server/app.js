const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const Gallery = require('../database/models/gallery');

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
  Gallery.findByID(req.params.id, (err, gallery) => {
    if (err) {
      res.status(404).json({ error: `ID ${req.params.id} does not exist in database` });
    } else {
      res.json({ data: gallery });
    }
  });
});

module.exports = app;