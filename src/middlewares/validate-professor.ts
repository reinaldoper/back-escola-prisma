import { Request, Response, NextFunction } from "express";
import { Status } from '../Status';


export const errorResponse = (req: Request, res: Response, next: NextFunction) => {
  const { nome, email, disciplina } = req.body;
  if (!nome || !email || !disciplina || nome.length === 0 || email.length === 0 || disciplina.length === 0) {
    return res.status(Status.BedRequest).json({ error: "Invalid parameters" });
  } else {
    next()
  }
}

export const errorIdProfessor = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    return res.status(Status.BedRequest).json({ error: "Invalid parameters" });
  } else if (isNaN(Number(id))) {
    return res.status(Status.BedRequest).json({ error: "Invalid id type" });
  } else {
    next()
  }
}

export const errorResponsePut = (req: Request, res: Response, next: NextFunction) => {
  const { nome, disciplina } = req.body;
  if (!nome || !disciplina || nome.length === 0 || disciplina.length === 0) {
    return res.status(Status.BedRequest).json({ error: "Invalid parameters" });
  } else {
    next()
  }
}
