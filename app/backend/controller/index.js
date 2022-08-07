import { cadastroService, usersService } from "../service/index.js";

const cadastroController = async (req, res) => {
  const { insertId } = await cadastroService(req.body);
  const retorno = insertId ? res.status(200).json({ id: insertId, ...req.body }) : res.status(500);
  return retorno;
}

const usersController = async (_req, res) => {
  const response = await usersService();
  const retorno = response ? res.status(200).json(response) : res.status(500);
  return retorno;
}

export { cadastroController, usersController };