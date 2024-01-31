import prisma from "../PrismaClient/Prisma";
import { IAluno } from "../Types/types";
import Professores from "./Professores";

class Alunos {

  private professor = new Professores();

  constructor(private prismaClient = prisma) { }

  public getAlunos = async (): Promise<IAluno[]> => {
    const alunos = await this.prismaClient.aluno.findMany({
      select: {
        id: true,
        nome: true,
        role: true,
        professor: true,
        createdAt: true,
      }
    });
    return alunos as unknown as IAluno[];
  };

  public createAluno = async (aluno: IAluno): Promise<IAluno | string> => {
    const existeProfessor = await this.professor.getProfessorById(aluno.professorId);
    if (!existeProfessor) {
      return "Professor not found"
    } else {
      const created = await this.prismaClient.aluno.create({
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
      return created as unknown as IAluno;
    }

  };

  public getAlunoById = async (id: number): Promise<IAluno[]> => {
    const data = await this.prismaClient.aluno.findUnique({
      where: { id: id },
      select: {
        id: true,
        nome: true,
        role: true,
        professor: true,
        createdAt: true,
      }
    })

    return data as unknown as IAluno[];
  };

  public updateAluno = async (id: number, nome: string): Promise<IAluno | string> => {
    const verify = await this.getAlunoById(id);
    if (verify) {
      const updated = await this.prismaClient.aluno.update({
        where: { id: id },
        data: {
          nome: nome
        },
        select: {
          nome: true,
          role: true,
          professor: true,
          createdAt: true,
        }
      });
      return updated as unknown as IAluno;
    } else {
      return "Aluno not found";
    }
  };

  public deleteAluno = async (id: number): Promise<string> => {
    const verify = await this.getAlunoById(id);
    if (!verify) {
      return "User does not exist"
    } else {
      this.prismaClient.aluno.delete({
        where: {
          id: id,
        }
      })

      return `Deleted user with id: ${id}`;
    }
  }

}

export default Alunos;