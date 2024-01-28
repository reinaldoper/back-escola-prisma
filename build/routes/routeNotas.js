"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const NotasController_1 = __importDefault(require("../controllers/NotasController"));
const validate_nota_1 = require("../middlewares/validate-nota");
const notas = new NotasController_1.default();
const routeNota = (0, express_1.Router)();
routeNota.get('/api/notas', notas.getNotas);
routeNota.get('/api/notas/:id', validate_nota_1.errorNotaId, notas.getNotaById);
routeNota.put('/api/notas/:id', validate_nota_1.errorNotaId, validate_nota_1.errorValor, notas.updateNota);
routeNota.delete('/api/notas/:id', validate_nota_1.errorNotaId, notas.deleteNota);
routeNota.post('/api/notas', validate_nota_1.errorNotas, notas.createNota);
exports.default = routeNota;
