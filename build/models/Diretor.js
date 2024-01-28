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
class Diretor {
    constructor(prismaClient = Prisma_1.default) {
        this.prismaClient = prismaClient;
        this.getDiretor = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.prismaClient.diretor.findMany({
                select: {
                    id: true,
                    createdAt: true,
                    nome: true,
                    email: true
                }
            });
            return result;
        });
        this.createDiretor = (nome, email) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.prismaClient.diretor.create({
                data: {
                    nome: nome,
                    email: email,
                },
                select: {
                    id: true,
                    createdAt: true,
                    nome: true,
                    email: true
                }
            });
            return result;
        });
        this.getDiretorById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.prismaClient.diretor.findUnique({
                where: { id: id },
                select: {
                    id: true,
                    createdAt: true,
                    nome: true,
                    email: true
                }
            });
            return result;
        });
        this.updateDiretor = (id, nome) => __awaiter(this, void 0, void 0, function* () {
            const verify = yield this.getDiretorById(id);
            if (!verify) {
                return "Diretor not found";
            }
            else {
                const result = yield this.prismaClient.diretor.update({
                    where: { id: id },
                    data: {
                        nome: nome,
                    },
                    select: {
                        id: true,
                        createdAt: true,
                        nome: true,
                        email: true
                    }
                });
                return result;
            }
        });
        this.deleteDiretor = (id) => __awaiter(this, void 0, void 0, function* () {
            const verify = yield this.getDiretorById(id);
            if (!verify) {
                return "Diretor not found";
            }
            else {
                this.prismaClient.diretor.delete({
                    where: { id: id },
                });
                return "Diretor deleted successfully";
            }
        });
    }
}
exports.default = Diretor;
