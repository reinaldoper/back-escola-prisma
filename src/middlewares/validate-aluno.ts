import { Request, Response, NextFunction } from "express";
import { Status } from '../Status';

export const errorAluno = (req: Request, res: Response, next: NextFunction) => {
  const { nome, idade, email, professorId } = req.body;
  if (!nome || !idade || !email || !professorId || nome.length === 0 || idade.length === 0) { 
    return res.status(Status.BedRequest).json({ error: "Invalid parameters" });
  } else {
    next();
  }
}

export const errorIdAluno = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    return res.status(Status.BedRequest).json({ error: "Id is required" });
  } else if (isNaN(Number(id))) {
    return res.status(Status.BedRequest).json({ error: "Invalid id type" });
  } else {
    next();
  }
}

export const errorAlunoPut = (req: Request, res: Response, next: NextFunction) => {
  const { nome,  professorId } = req.body;
  if (!nome || nome.length === 0 && isNaN(Number(professorId))) { 
    return res.status(Status.BedRequest).json({ error: "Invalid parameters" });
  } else {
    next();
  }
}