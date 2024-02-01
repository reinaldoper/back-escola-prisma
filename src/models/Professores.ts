import prisma from "../PrismaClient/Prisma";
import { IProfessor } from "../Types/types";

class Professores {

  constructor(private prismaCLient = prisma) {
  }

  public getProfessores = async (): Promise<IProfessor[]> => {
    const returnProfessores = await this.prismaCLient.professor.findMany({
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
    return returnProfessores as unknown as IProfessor[];
  }

  public createProfessor = async (professor: IProfessor): Promise<IProfessor> => {
    const created = await this.prismaCLient.professor.create({
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
    return created as unknown as IProfessor;
  };

  public getProfessorById = async (id: number): Promise<IProfessor[]> => {
    const data = await this.prismaCLient.professor.findUnique({
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
    })

    return data as unknown as IProfessor[];
  };

  public updateProfessor = async (id: number, nome: string, disciplina: string): Promise<IProfessor | string> => {
    const verify = await this.getProfessorById(id);
    if (verify) {
      const updated = await this.prismaCLient.professor.update({
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
      return updated as unknown as IProfessor;
    } else {
      return "Teacher not found";
    }
  };

  public deleteProfessor = async (id: number): Promise<string> => {
    const verify = await this.getProfessorById(id);
    if (!verify) {
      return "Teacher does not exist"
    } else {
      await this.prismaCLient.professor.delete({
        where: {
          id: id,
        }
      })

      return `Deleted teacher with id: ${id}`;
    }
  }


}

export default Professores;