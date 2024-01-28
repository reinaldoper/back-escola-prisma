import { Response, Request } from "express";
import { Status } from "../Status";
import NotaDto from "../Dto/NotaDto";
import Notas from "../models/Notas"


class NotasController implements NotaDto {

  constructor(private notas = new Notas()) {}


  public getNotas = async (req: Request, res: Response) => {
    try {
      const result = await this.notas.getNotas();
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };


  public getNotaById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.notas.getNotaById(Number(id));
      if (result !== null) {
        return res.status(Status.OK).json({ message: result });
      } else {
        return res.status(Status.Not_Found).json({ message: "Nota not found" });
      }
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };


  public updateNota = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { valor } = req.body;
      const result = await this.notas.updateNota(Number(id), Number(valor));
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };


  public deleteNota = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await this.notas.deleteNota(Number(id));
      return res.status(Status.OK).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };


  public createNota = async (req: Request, res: Response) => {
    try {
      const { valor, alunoId } = req.body;
      const result = await this.notas.createNota(Number(valor), Number(alunoId));
      return res.status(Status.Created).json({ message: result });
    } catch (error) {
      return res.status(Status.InternalError).json({ error: "Internal error" });
    }
  };
  
}

export default NotasController;