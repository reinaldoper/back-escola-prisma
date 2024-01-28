"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProfessorController_1 = __importDefault(require("../controllers/ProfessorController"));
const express_1 = require("express");
const validate_professor_1 = require("../middlewares/validate-professor");
const professor = new ProfessorController_1.default();
const routeProfessor = (0, express_1.Router)();
routeProfessor.post('/api/professor', validate_professor_1.errorResponse, professor.createProfessor);
routeProfessor.get('/api/professor', professor.getProfessores);
routeProfessor.get('/api/professor/:id', validate_professor_1.errorIdProfessor, professor.getProfessorById);
routeProfessor.put('/api/professor/:id', validate_professor_1.errorIdProfessor, validate_professor_1.errorResponsePut, professor.updateProfessor);
routeProfessor.delete('/api/professor/:id', validate_professor_1.errorIdProfessor, professor.deleteProfessor);
exports.default = routeProfessor;
