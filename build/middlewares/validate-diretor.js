"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorPutDiretor = exports.errorDiretor = exports.errorIdDiretor = void 0;
const Status_1 = require("../Status");
const errorIdDiretor = (req, res, next) => {
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
exports.errorIdDiretor = errorIdDiretor;
const errorDiretor = (req, res, next) => {
    const { nome, email } = req.body;
    if (!nome || !email || nome.length === 0 || email.length === 0) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid parameters" });
    }
    else {
        next();
    }
};
exports.errorDiretor = errorDiretor;
const errorPutDiretor = (req, res, next) => {
    const { nome } = req.body;
    if (!nome || nome.length === 0) {
        return res.status(Status_1.Status.BedRequest).json({ error: "Invalid parameters" });
    }
    else {
        next();
    }
};
exports.errorPutDiretor = errorPutDiretor;
