import { Router } from "express";
import { cadastroController, usersController } from "../controller/index.js";
import cadastroMiddleware from "../middlewares/cadastroMiddleware.js";

const routes = Router();

routes.post('/cadastrar', cadastroMiddleware ,cadastroController);
routes.get('/users', usersController);


export default routes;