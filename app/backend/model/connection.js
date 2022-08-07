import mysql from 'mysql2/promise';

/* const connection = mysql.createPool({
  host: 'db4free.net',
  user: 'bity1020',
  password: 'ps3rules',
  database: 'provain8_db',
  port: 3306
});
 */

const connection = mysql.createPool({
  host: 'localhost',
  user: 'gabriel-lambertucci',
  password: 'ps3rules',
  database: 'provain8_db',
  port: 3306
});

export default connection;
