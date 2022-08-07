import connection from "./connection.js";

const cadastroModel = async (body) => {
  const { nome, email, nascimento, telefone } = body;
  const [result] = await connection.execute('INSERT INTO users (nome, email, nascimento, telefone) VALUES (?, ?, ?, ?)',
  [nome, email, nascimento, telefone]);
  return result;
}

const usersModel = async () => {
  const [result] = await connection.execute('SELECT * FROM users');
  return result;
}


export { cadastroModel, usersModel };