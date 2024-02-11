import { Request, Response } from "express";
import { Status } from '../Status';
import Professores from '../models/Professores';
import ProfessorDto from "../Dto/ProfessorDto";

class ProfessorController implements ProfessorDto {

  constructor(private professor = new Professores()) { }

  public createProfessor = async (req: Request, res: Response) => {

    try {
      const result = await this.professor.createProfessor(req.body);
      return res.status(Status.Created).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  }

  public getProfessores = async (req: Request, res: Response) => {
    try {
      const data = await this.professor.getProfessores();

      return res.status(Status.OK).json({ message: data });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };

  public getProfessorById = async (req: Request, res: Response) => {


    try {
      const { id } = req.params;
      const result = await this.professor.getProfessorById(Number(id));

      if (result) {
        return res.status(Status.OK).json({ message: result });
      } else {
        return res.status(Status.Not_Found).json({ error: "Teacher not found" });
      }
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };

  public updateProfessor = async (req: Request, res: Response) => {



    try {
      const { id } = req.params;
      const { nome, disciplina } = req.body;
      const result = await this.professor.updateProfessor(Number(id), nome, disciplina);

      if (result === "Teacher not found") {
        return res.status(Status.Not_Found).json({ error: result });
      } else {
        return res.status(Status.OK).json({ message: result });
      }
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }

  };

  //método delete teacher
  public deleteProfessor = async (req: Request, res: Response) => {
    
    try {
      const { id } = req.params;
      const request = await this.professor.deleteProfessor(Number(id));
      if(request === 'Teacher does not exist'){
        return res.status(Status.Not_Found).json({ error: request });
      }
      return res.status(Status.OK).json({ message: request });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Teacher with students associated." });
    }
  }
}

export default ProfessorController;