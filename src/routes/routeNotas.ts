import { Router } from "express";
import NotasController from "../controllers/NotasController";
import { errorNotas, errorNotaId, errorValor } from "../middlewares/validate-nota";

const notas = new NotasController();

const routeNota = Router();

routeNota.get('/api/notas', notas.getNotas);
routeNota.get('/api/notas/:id', errorNotaId, notas.getNotaById);
routeNota.put('/api/notas/:id', errorNotaId, errorValor, notas.updateNota);
routeNota.delete('/api/notas/:id', errorNotaId, notas.deleteNota);
routeNota.post('/api/notas', errorNotas, notas.createNota);


export default routeNota;

