export interface IProfessor {
  nome: string;
  disciplina: string;
  email: string;
  alunos: IAluno[];
}

export interface IAluno{
  nome: string;
  idade: number;
  email: string;
  notas: INotas[];
  professorId: number;
}

export interface INotas {
  valor: number;
  alunoId: number;
}

export interface IDiretor {
  nome: string;
  email: string;
}