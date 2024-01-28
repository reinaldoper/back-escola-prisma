"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Status_1 = require("../Status");
const Notas_1 = __importDefault(require("../models/Notas"));
class NotasController {
    constructor(notas = new Notas_1.default()) {
        this.notas = notas;
        this.getNotas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.notas.getNotas();
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.getNotaById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.notas.getNotaById(Number(id));
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.updateNota = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { valor } = req.body;
                const result = yield this.notas.updateNota(Number(id), Number(valor));
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.deleteNota = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.notas.deleteNota(Number(id));
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.createNota = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { valor, alunoId } = req.body;
                const result = yield this.notas.createNota(Number(valor), Number(alunoId));
                return res.status(Status_1.Status.Created).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
    }
}
exports.default = NotasController;
