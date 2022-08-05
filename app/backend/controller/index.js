import { cadastroService } from "../service";

const cadastroController = async (req, res) => {
  const response = await cadastroService(req.body);
  return res.status(200).json(response); 
}

export { cadastroController }