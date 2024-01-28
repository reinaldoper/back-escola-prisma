"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorValor = exports.errorNotaId = exports.errorNotas = void 0;
const Status_1 = require("../Status");
const errorNotas = (req, res, next) => {
    const { valor, alunoId } = req.body;
    if (!valor || !alunoId) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid parameters" });
    }
    else {
        next();
    }
};
exports.errorNotas = errorNotas;
const errorNotaId = (req, res, next) => {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid type id" });
    }
    else {
        next();
    }
};
exports.errorNotaId = errorNotaId;
const errorValor = (req, res, next) => {
    const { valor } = req.body;
    if (!valor || isNaN(Number(valor))) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid parameters" });
    }
    else {
        next();
    }
};
exports.errorValor = errorValor;
