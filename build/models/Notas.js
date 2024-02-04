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
class Notas {
    constructor(prismaClent = Prisma_1.default) {
        this.prismaClent = prismaClent;
        this.getNotas = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.prismaClent.nota.findMany({
                select: {
                    id: true,
                    aluno: true,
                    alunoId: true,
                    valor: true,
                    semestre: true,
                }
            });
            return result;
        });
        this.createNota = (valor, alunoId, semestre) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.prismaClent.nota.create({
                data: {
                    valor: valor,
                    alunoId: alunoId,
                    semestre: semestre,
                },
                select: {
                    id: true,
                    aluno: true,
                    alunoId: true,
                    valor: true,
                    semestre: true,
                }
            });
            return result;
        });
        this.getNotaById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.prismaClent.nota.findUnique({
                where: { id: id },
                select: {
                    id: true,
                    aluno: true,
                    alunoId: true,
                    valor: true,
                    semestre: true,
                }
            });
            return result;
        });
        this.updateNota = (id, valor, semestre) => __awaiter(this, void 0, void 0, function* () {
            const verify = yield this.getNotaById(id);
            if (verify) {
                const result = yield this.prismaClent.nota.update({
                    where: { id: id },
                    data: {
                        valor: valor,
                        semestre: semestre
                    },
                    select: {
                        aluno: true,
                        alunoId: true,
                        valor: true,
                    }
                });
                return result;
            }
            else {
                return "Not found";
            }
        });
        this.deleteNota = (id) => __awaiter(this, void 0, void 0, function* () {
            const verify = yield this.getNotaById(id);
            if (!verify) {
                return "Not found";
            }
            else {
                yield this.prismaClent.nota.delete({
                    where: { id: id },
                });
                return "Deleted";
            }
        });
    }
}
exports.default = Notas;
