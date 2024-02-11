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
const Alunos_1 = __importDefault(require("../models/Alunos"));
class AlunosController {
    constructor(alunos = new Alunos_1.default()) {
        this.alunos = alunos;
        this.createAluno = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.alunos.createAluno(req.body);
                return res.status(Status_1.Status.Created).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.getAlunoById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.alunos.getAlunoById(Number(id));
                if (result) {
                    return res.status(Status_1.Status.OK).json({ message: result });
                }
                else {
                    return res.status(Status_1.Status.Not_Found).json({ error: "Aluno not found" });
                }
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.updateAluno = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nome, professorId } = req.body;
                const result = yield this.alunos.updateAluno(Number(id), nome, Number(professorId));
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.deleteAluno = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.alunos.deleteAluno(Number(id));
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.getAlunos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.alunos.getAlunos();
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
    }
}
exports.default = AlunosController;
