"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DiretorController_1 = __importDefault(require("../controllers/DiretorController"));
const validate_diretor_1 = require("../middlewares/validate-diretor");
const diretor = new DiretorController_1.default();
const routeDiretor = (0, express_1.Router)();
routeDiretor.get('/api/diretor', diretor.getDiretor);
routeDiretor.get('/api/diretor/:id', validate_diretor_1.errorIdDiretor, diretor.getDiretorById);
routeDiretor.put('/api/diretor/:id', validate_diretor_1.errorIdDiretor, validate_diretor_1.errorPutDiretor, diretor.updateDiretor);
routeDiretor.delete('/api/diretor/:id', validate_diretor_1.errorIdDiretor, diretor.deleteDiretor);
routeDiretor.post('/api/diretor', validate_diretor_1.errorDiretor, diretor.createDiretor);
routeDiretor.patch('/api/diretor/login', diretor.loginDiretor);
exports.default = routeDiretor;
