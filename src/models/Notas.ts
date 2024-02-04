import prisma from "../PrismaClient/Prisma";
import { INotas } from "../Types/types";

class Notas {

  constructor(private prismaClent = prisma) { }

  public getNotas = async (): Promise<INotas[]> => {
    const result = await this.prismaClent.nota.findMany({
      select: {
        id: true,
        aluno: true,
        alunoId: true,
        valor: true,
        semestre: true,
      }
    });
    return result as unknown as INotas[];
  }

  public createNota = async (valor: number, alunoId: number, semestre: string): Promise<INotas> => {

    const result = await this.prismaClent.nota.create({
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

    return result as unknown as INotas;
  };

  public getNotaById = async (id: number): Promise<INotas[]> => {
    const result = await this.prismaClent.nota.findUnique({
      where: { id: id },
      select: {
        id: true,
        aluno: true,
        alunoId: true,
        valor: true,
        semestre: true,
      }
    });

    return result as unknown as INotas[];
  }

  public updateNota = async (id: number, valor: number, semestre: string): Promise<INotas | string> => {
    const verify = await this.getNotaById(id);
    if (verify) {
      const result = await this.prismaClent.nota.update({
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

      return result as unknown as INotas;
    } else {
      return "Not found";
    }

  }

  public deleteNota = async (id: number): Promise<string> => {
    const verify = await this.getNotaById(id);
    if (!verify) {
      return "Not found";
    } else {
      await this.prismaClent.nota.delete({
        where: { id: id },
      })
      return "Deleted";
    }
  }
}

export default Notas;