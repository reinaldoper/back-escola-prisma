import ProfessorController from "../controllers/ProfessorController";
import { Router } from "express";
import { errorResponse, errorIdProfessor, errorResponsePut } from "../middlewares/validate-professor"

const professor = new ProfessorController();

const routeProfessor = Router();

routeProfessor.post('/api/professor', errorResponse, professor.createProfessor);
routeProfessor.get('/api/professor', professor.getProfessores);
routeProfessor.get('/api/professor/:id', errorIdProfessor, professor.getProfessorById);
routeProfessor.put('/api/professor/:id', errorIdProfessor, errorResponsePut, professor.updateProfessor);
routeProfessor.delete('/api/professor/:id', errorIdProfessor, professor.deleteProfessor);
routeProfessor.patch('/api/professor/login', professor.loginProfessor);


export default routeProfessor;