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
const Diretor_1 = __importDefault(require("../models/Diretor"));
class DiretorController {
    constructor(diretor = new Diretor_1.default()) {
        this.diretor = diretor;
        this.loginDiretor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            try {
                const result = yield this.diretor.getDiretorByEmail(email);
                if (!result) {
                    return res.status(Status_1.Status.Not_Found).json({ error: "User not found!" });
                }
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Erro interno" });
            }
        });
        this.getDiretor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.diretor.getDiretor();
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.getDiretorById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.diretor.getDiretorById(Number(id));
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.updateDiretor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nome, email } = req.body;
                const result = yield this.diretor.updateDiretor(Number(id), nome, email);
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.deleteDiretor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.diretor.deleteDiretor(Number(id));
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
        this.createDiretor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome, email } = req.body;
                const result = yield this.diretor.createDiretor(nome, email);
                return res.status(Status_1.Status.OK).json({ message: result });
            }
            catch (error) {
                return res.status(Status_1.Status.InternalError).json({ error: "Internal error" });
            }
        });
    }
}
exports.default = DiretorController;
