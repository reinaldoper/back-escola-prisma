import { Router } from "express";
import AlunosController from "../controllers/AlunosController";
import { errorAluno, errorIdAluno, errorAlunoPut } from "../middlewares/validate-aluno";

const alunos = new AlunosController();

const routeAluno = Router();

// alterado aqui
routeAluno.get('/api/aluno', alunos.getAlunos);
routeAluno.get('/api/aluno/:id', errorIdAluno, alunos.getAlunoById)
routeAluno.put('/api/aluno/:id', errorIdAluno, errorAlunoPut, alunos.updateAluno)
routeAluno.delete('/api/aluno/:id', errorIdAluno, alunos.deleteAluno);
routeAluno.post('/api/aluno', errorAluno, alunos.createAluno);



export default routeAluno;