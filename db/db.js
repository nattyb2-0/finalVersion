const pgp = require('pg-promise')();

const config = {
  host:       'localhost',
  port:       5432,
  database:   'project4',
  user:       'nattydavis',

};
const db = pgp(config);

module.exports = db;


