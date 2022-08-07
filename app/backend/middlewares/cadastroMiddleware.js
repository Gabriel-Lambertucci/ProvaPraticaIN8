import Joi from 'joi';

const validaCliente = (input) => {
  const schema = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    nascimento: Joi.string().required(),
    telefone: Joi.string().required(),
  }).messages({
    'any.required': '{{#label}} is required',
  });
  return schema.validate(input, { abortEarly: false });
};

const cadastroMiddleware = (req, res, next) => {
  const isValid = validaCliente(req.body);
  const message = isValid.error?.message;
  if (message) {
    return res.status(400).json({ message });
  }
  return next();
}

export default cadastroMiddleware;