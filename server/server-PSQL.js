require('newrelic');
require('dotenv').config();
const { app, client } = require('./app-PSQL');

client.connect()
  .then(() => console.log('PostgreSQL connected'))
  .catch(e => console.error('PostgreSQL connection error', e))

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});