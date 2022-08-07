import { cadastroModel, usersModel } from "../model/index.js";

const cadastroService = async (body) => {
  const response = await cadastroModel(body);
  return response;
};

const usersService = async (body) => {
  const response = await usersModel(body);
  return response;
}

export { cadastroService, usersService };