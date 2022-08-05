import { cadastroModel } from "../model";

const cadastroService = async (body) => {
  const response = await cadastroModel(body);
  return response;
}

export { cadastroService }