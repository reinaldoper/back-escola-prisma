import prisma from '../PrismaClient/Prisma';
import { IDiretor } from '../Types/types';

class Diretor {

  constructor(private prismaClient = prisma) { }

  public getDiretorByEmail = async (email: string): Promise<IDiretor> => {
      const result = await this.prismaClient.diretor.findUnique({
        where: { email },
        select: {
          role: true,
          nome: true,
          email: true
        }
      })
      return result as unknown as  IDiretor;
  };

  public getDiretor = async (): Promise<IDiretor> => {
    const result = await this.prismaClient.diretor.findMany({
      select: {
        id: true,
        role: true,
        createdAt: true,
        nome: true,
        email: true
      }
    });
    return result as unknown as IDiretor;
  }

  public createDiretor = async (nome: string, email: string): Promise<IDiretor> => {
    const result = await this.prismaClient.diretor.create({
      data: {
        nome: nome,
        email: email,
      },
      select: {
        id: true,
        role: true,
        createdAt: true,
        nome: true,
        email: true
      }
    });

    return result as unknown as IDiretor;
  };

  public getDiretorById = async (id: number): Promise<IDiretor[]> => {

    const result = await this.prismaClient.diretor.findUnique({
      where: { id: id },
      select: {
        id: true,
        role: true,
        createdAt: true,
        nome: true,
        email: true
      }
    })

    return result as unknown as IDiretor[];
  };

  public updateDiretor = async (id: number, nome: string, email: string): Promise<IDiretor | string> => {
    const verify = await this.getDiretorById(id);
    if (!verify) {
      return "Diretor not found"
    } else {
      const result = await this.prismaClient.diretor.update({
        where: { id: id },
        data: {
          nome: nome,
          email: email
        },
        select: {
          id: true,
          role: true,
          createdAt: true,
          nome: true,
          email: true
        }
      });

      return result as unknown as IDiretor;
    }
  };

  public deleteDiretor = async (id: number): Promise<string> => {
    const verify = await this.getDiretorById(id);
    if (!verify) {
      return "Diretor not found"
    } else {
      await this.prismaClient.diretor.delete({
        where: { id: id },
      })

      return "Diretor deleted successfully"
    }
  }

}

export default Diretor;