import knex from 'knex';
import path from 'path';

/* documentação
http://knexjs.org/ */

const connection = knex({
  client : 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default connection;