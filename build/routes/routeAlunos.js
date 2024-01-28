"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AlunosController_1 = __importDefault(require("../controllers/AlunosController"));
const validate_aluno_1 = require("../middlewares/validate-aluno");
const alunos = new AlunosController_1.default();
const routeAluno = (0, express_1.Router)();
// alterado aqui
routeAluno.get('/api/aluno', alunos.getAlunos);
routeAluno.get('/api/aluno/:id', validate_aluno_1.errorIdAluno, alunos.getAlunoById);
routeAluno.put('/api/aluno/:id', validate_aluno_1.errorIdAluno, validate_aluno_1.errorAlunoPut, alunos.updateAluno);
routeAluno.delete('/api/aluno/:id', validate_aluno_1.errorIdAluno, alunos.deleteAluno);
routeAluno.post('/api/aluno', validate_aluno_1.errorAluno, alunos.createAluno);
exports.default = routeAluno;
