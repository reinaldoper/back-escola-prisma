"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorAlunoPut = exports.errorIdAluno = exports.errorAluno = void 0;
const Status_1 = require("../Status");
const errorAluno = (req, res, next) => {
    const { nome, idade, email, professorId } = req.body;
    if (!nome || !idade || !email || !professorId || nome.length === 0 || idade.length === 0) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid parameters" });
    }
    else {
        next();
    }
};
exports.errorAluno = errorAluno;
const errorIdAluno = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Id is required" });
    }
    else if (isNaN(Number(id))) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid id type" });
    }
    else {
        next();
    }
};
exports.errorIdAluno = errorIdAluno;
const errorAlunoPut = (req, res, next) => {
    const { nome } = req.body;
    if (!nome || nome.length === 0) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid parameters" });
    }
    else {
        next();
    }
};
exports.errorAlunoPut = errorAlunoPut;
