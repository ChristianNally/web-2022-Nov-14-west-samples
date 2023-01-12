require('dotenv').config();

const pg = require('pg');

const Client = pg.Client;

const config = {
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
};

const client = new Client(config);

client.connect();

const verb = process.argv[2];
const id = process.argv[3];
// console.log('verb', verb);

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'read':
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((response) => {
        console.log(response.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newName = process.argv[4];
    client.query('UPDATE movie_villains SET villain = $2 WHERE id = $1;', [id, newName])
      .then(() => {
        // console.log(response.rows);
        console.log('villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const name = process.argv[3];
    const movie = process.argv[4];
    const query = 'INSERT INTO movie_villains(villain, movie) VALUES($1, $2);';
    client.query(query, [name, movie])
      .then(() => {
        console.log('Disney+ is creating a solo series for', name);
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('the villain has been vanquished');
        client.end();
      });
    break;

  default:
    console.log('please use a valid BROWSE verb');
    client.end();
}
