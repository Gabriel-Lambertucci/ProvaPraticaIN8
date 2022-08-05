import { Router } from "express";
import { cadastroController } from "../controller";

const routes = Router();

routes.post('/cadastrar', cadastroController);

export default routes;