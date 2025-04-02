import { Router } from "express";
import DiretorController from "../controllers/DiretorController";
import { errorDiretor, errorIdDiretor, errorPutDiretor } from "../middlewares/validate-diretor";

const diretor = new DiretorController();

const routeDiretor = Router();

routeDiretor.get('/api/diretor', diretor.getDiretor)
routeDiretor.get('/api/diretor/:id', errorIdDiretor, diretor.getDiretorById);
routeDiretor.put('/api/diretor/:id', errorIdDiretor, errorPutDiretor, diretor.updateDiretor);
routeDiretor.delete('/api/diretor/:id', errorIdDiretor, diretor.deleteDiretor);
routeDiretor.post('/api/diretor', errorDiretor, diretor.createDiretor);
routeDiretor.patch('/api/diretor/login', diretor.loginDiretor);

export default routeDiretor;