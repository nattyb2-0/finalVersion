
const pg       = require('pg-promise')();

const pgConfig =  process.env.DATABASE_URL ||

               {  host:     process.env.PG_HOST,
                   port:     process.env.PG_PORT,
                   database: process.env.PG_DATABASE,
                   user:     process.env.PG_USER
                  };

const db       = pg(pgConfig);

module.exports = db;

// const pgp = require('pg-promise')();

// const config = {
//   host:       'localhost',
//   port:       5432,
//   database:   'project4',
//   user:       'nattydavis',

// };
// const db = pgp(config);

// module.exports = db;

