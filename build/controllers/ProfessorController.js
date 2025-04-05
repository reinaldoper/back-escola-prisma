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
const Professores_1 = __importDefault(require("../models/Professores"));
class ProfessorController {
    constructor(professor = new Professores_1.default()) {
        this.professor = professor;
        this.createProfessor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.professor.createProfessor(req.body);
                return res.status(Status_1.Status.Created).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.loginProfessor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            try {
                const result = yield this.professor.getProfessorByEmail(email);
                if (!result) {
                    return res.status(Status_1.Status.Not_Found).json({ error: "Teacher not found" });
                }
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.getProfessores = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.professor.getProfessores();
                return res.status(Status_1.Status.OK).json({ message: data });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.getProfessorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.professor.getProfessorById(Number(id));
                if (result) {
                    return res.status(Status_1.Status.OK).json({ message: result });
                }
                else {
                    return res.status(Status_1.Status.Not_Found).json({ error: "Teacher not found" });
                }
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.updateProfessor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nome, disciplina } = req.body;
                const result = yield this.professor.updateProfessor(Number(id), nome, disciplina);
                if (result === "Teacher not found") {
                    return res.status(Status_1.Status.Not_Found).json({ error: result });
                }
                else {
                    return res.status(Status_1.Status.OK).json({ message: result });
                }
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        //método delete teacher
        this.deleteProfessor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const request = yield this.professor.deleteProfessor(Number(id));
                if (request === 'Teacher does not exist') {
                    return res.status(Status_1.Status.Not_Found).json({ error: request });
                }
                return res.status(Status_1.Status.OK).json({ message: request });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Teacher with students associated." });
            }
        });
    }
}
exports.default = ProfessorController;
