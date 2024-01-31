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
const Professores_1 = __importDefault(require("./Professores"));
class Alunos {
    constructor(prismaClient = Prisma_1.default) {
        this.prismaClient = prismaClient;
        this.professor = new Professores_1.default();
        this.getAlunos = () => __awaiter(this, void 0, void 0, function* () {
            const alunos = yield this.prismaClient.aluno.findMany({
                select: {
                    id: true,
                    nome: true,
                    role: true,
                    email: true,
                    professor: true,
                    createdAt: true,
                }
            });
            return alunos;
        });
        this.createAluno = (aluno) => __awaiter(this, void 0, void 0, function* () {
            const existeProfessor = yield this.professor.getProfessorById(aluno.professorId);
            if (!existeProfessor) {
                return "Professor not found";
            }
            else {
                const created = yield this.prismaClient.aluno.create({
                    data: {
                        nome: aluno.nome,
                        idade: aluno.idade,
                        email: aluno.email,
                        professorId: aluno.professorId,
                    },
                    select: {
                        nome: true,
                        role: true,
                        email: true,
                        professor: true,
                        createdAt: true,
                    }
                });
                return created;
            }
        });
        this.getAlunoById = (id) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.prismaClient.aluno.findUnique({
                where: { id: id },
                select: {
                    id: true,
                    nome: true,
                    role: true,
                    email: true,
                    professor: true,
                    createdAt: true,
                }
            });
            return data;
        });
        this.updateAluno = (id, nome) => __awaiter(this, void 0, void 0, function* () {
            const verify = yield this.getAlunoById(id);
            if (verify) {
                const updated = yield this.prismaClient.aluno.update({
                    where: { id: id },
                    data: {
                        nome: nome
                    },
                    select: {
                        nome: true,
                        role: true,
                        email: true,
                        professor: true,
                        createdAt: true,
                    }
                });
                return updated;
            }
            else {
                return "Aluno not found";
            }
        });
        this.deleteAluno = (id) => __awaiter(this, void 0, void 0, function* () {
            const verify = yield this.getAlunoById(id);
            if (!verify) {
                return "User does not exist";
            }
            else {
                this.prismaClient.aluno.delete({
                    where: {
                        id: id,
                    }
                });
                return `Deleted user with id: ${id}`;
            }
        });
    }
}
exports.default = Alunos;
