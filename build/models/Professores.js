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
const Prisma_1 = __importDefault(require("../PrismaClient/Prisma"));
class Professores {
    constructor(prismaCLient = Prisma_1.default) {
        this.prismaCLient = prismaCLient;
        this.getProfessores = () => __awaiter(this, void 0, void 0, function* () {
            const returnProfessores = yield this.prismaCLient.professor.findMany({
                select: {
                    id: true,
                    nome: true,
                    role: true,
                    disciplina: true,
                    email: true,
                    createdAt: true,
                    alunos: true,
                }
            });
            return returnProfessores;
        });
        this.createProfessor = (professor) => __awaiter(this, void 0, void 0, function* () {
            const created = yield this.prismaCLient.professor.create({
                data: {
                    nome: professor.nome,
                    disciplina: professor.disciplina,
                    email: professor.email,
                },
                select: {
                    id: true,
                    nome: true,
                    role: true,
                    email: true,
                    disciplina: true,
                    createdAt: true,
                    alunos: true,
                }
            });
            return created;
        });
        this.getProfessorById = (id) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.prismaCLient.professor.findUnique({
                where: { id: id },
                select: {
                    id: true,
                    nome: true,
                    role: true,
                    email: true,
                    disciplina: true,
                    createdAt: true,
                    alunos: true,
                }
            });
            return data;
        });
        this.updateProfessor = (id, nome, disciplina) => __awaiter(this, void 0, void 0, function* () {
            const verify = yield this.getProfessorById(id);
            if (verify) {
                const updated = yield this.prismaCLient.professor.update({
                    where: { id: id },
                    data: {
                        nome: nome,
                        disciplina: disciplina
                    },
                    select: {
                        id: true,
                        nome: true,
                        role: true,
                        email: true,
                        disciplina: true,
                        createdAt: true,
                        alunos: true,
                    }
                });
                return updated;
            }
            else {
                return "Professor not found";
            }
        });
        this.deleteProfessor = (id) => __awaiter(this, void 0, void 0, function* () {
            const verify = yield this.getProfessorById(id);
            if (!verify) {
                return "User does not exist";
            }
            else {
                this.prismaCLient.professor.delete({
                    where: {
                        id: id,
                    }
                });
                return `Deleted user with id: ${id}`;
            }
        });
    }
}
exports.default = Professores;
