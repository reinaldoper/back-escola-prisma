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
Object.defineProperty(exports, "__esModule", { value: true });
class AlunoDto {
    constructor() {
        this.getAlunos = (req, res) => __awaiter(this, void 0, void 0, function* () { return res; });
        this.getAlunoById = (req, res) => __awaiter(this, void 0, void 0, function* () { return res; });
        this.updateAluno = (req, res) => __awaiter(this, void 0, void 0, function* () { return res; });
        this.deleteAluno = (req, res) => __awaiter(this, void 0, void 0, function* () { return res; });
        this.createAluno = (req, res) => __awaiter(this, void 0, void 0, function* () { return res; });
        this.getAlunoByEmail = (req, res) => __awaiter(this, void 0, void 0, function* () { return res; });
    }
}
exports.default = AlunoDto;
