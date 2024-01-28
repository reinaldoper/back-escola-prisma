"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponsePut = exports.errorIdProfessor = exports.errorResponse = void 0;
const Status_1 = require("../Status");
const errorResponse = (req, res, next) => {
    const { nome, email, disciplina } = req.body;
    if (!nome || !email || !disciplina || nome.length === 0 || email.length === 0 || disciplina.length === 0) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid parameters" });
    }
    else {
        next();
    }
};
exports.errorResponse = errorResponse;
const errorIdProfessor = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid parameters" });
    }
    else if (isNaN(Number(id))) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid id type" });
    }
    else {
        next();
    }
};
exports.errorIdProfessor = errorIdProfessor;
const errorResponsePut = (req, res, next) => {
    const { nome, disciplina } = req.body;
    if (!nome || !disciplina || nome.length === 0 || disciplina.length === 0) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid parameters" });
    }
    else {
        next();
    }
};
exports.errorResponsePut = errorResponsePut;
