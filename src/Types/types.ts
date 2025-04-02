export interface IProfessor {
  nome: string;
  disciplina: string;
  email: string;
  role?: string;
  alunos: IAluno[];
}

export interface IAluno{
  nome: string;
  idade: number;
  email: string;
  role?: string;
  notas: INotas[];
  professorId: number;
}

export interface INotas {
  valor: number;
  alunoId: number;
}

export interface IDiretor {
  id: string;
  role: string;
  createdAt: string;
  nome: string;
  email: string;
}