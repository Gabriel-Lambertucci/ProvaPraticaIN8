import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
  host: 'db4free.net',
  user: 'bity1020',
  password: 'ps3rules',
  database: 'provain8db',
  port: 3306
});

export default connection;
