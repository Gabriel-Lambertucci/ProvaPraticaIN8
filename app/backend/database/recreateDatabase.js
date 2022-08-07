import fs from 'fs';
import path from 'path';

import connection from '../model/connection.js';

async function recreateDatabase() {
  try {
    const importPath = path.resolve('database/ProvaIN8.sql');
    const seedDBContent = fs.readFileSync(importPath).toString();
    const queries = seedDBContent.split(';').filter((p) => p.trim());
    for (let i = 0; i < queries.length; i += 1) {
      const query = queries[i];
      await connection.query(query); /* eslint-disable-line*/
    }
  } catch (error) {
    console.log('Banco Falha em restaurar o Banco', error); /* eslint-disable-line*/
  }
}

recreateDatabase()
  .then(async () => {
    console.log('Banco Restaurado com sucesso'); /* eslint-disable-line*/
    connection.end();
    process.exit(0);
  });
