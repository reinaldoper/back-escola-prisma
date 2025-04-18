import { Response, Request } from "express";
import { Status } from "../Status";
import DiretorDto from "../Dto/DiretorDto";
import Diretor from "../models/Diretor";


class DiretorController implements DiretorDto {

  constructor(private diretor = new Diretor()){}

  public loginDiretor = async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
      const result = await this.diretor.getDiretorByEmail(email);
      if (!result) {
        return res.status(Status.Not_Found).json({ error: "User not found!" });
      }
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Erro interno" });
    }
  };

  public getDiretor = async (req: Request, res: Response) => {
    try {
      const result = await this.diretor.getDiretor();
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };


  public getDiretorById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.diretor.getDiretorById(Number(id));
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };


  public updateDiretor = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      const result = await this.diretor.updateDiretor(Number(id), nome, email);
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }

  };


  public deleteDiretor = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.diretor.deleteDiretor(Number(id));
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };


  public createDiretor = async (req: Request, res: Response) => {
    try {
      const { nome, email } = req.body;
      const result = await this.diretor.createDiretor(nome, email);
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };
  
}

export default DiretorController;