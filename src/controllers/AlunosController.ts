import { Response, Request } from "express";
import { Status } from "../Status";
import Alunos from "../models/Alunos";
import AlunoDto from "../Dto/AlunoDto";



class AlunosController implements AlunoDto {

  constructor(private alunos = new Alunos()){}

  public createAluno = async (req: Request, res: Response) => {
    try {
      const result = await this.alunos.createAluno(req.body);
      return res.status(Status.Created).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  }


  public getAlunoById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.alunos.getAlunoById(Number(id));
      if (result) {
        return res.status(Status.OK).json({ message: result });
      } else {
        return res.status(Status.Not_Found).json({ error: "Aluno not found" });
      }
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
    
  };


  public updateAluno = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { nome, professorId } = req.body;
      const result = await this.alunos.updateAluno(Number(id), nome, Number(professorId));
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }

  };


  public deleteAluno = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.alunos.deleteAluno(Number(id));
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }


  };


  public getAlunos = async (req: Request, res: Response) => {
    try {
      const result = await this.alunos.getAlunos();
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };

}

export default AlunosController;