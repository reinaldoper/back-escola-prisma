import { Request, Response, NextFunction } from "express";
import { Status } from '../Status';

export const errorNotas = (req: Request, res: Response, next: NextFunction) => {
  const { valor, alunoId, semestre } = req.body;
  if(!valor || !alunoId || !semestre) {
    return res.status(Status.BedRequest).json({ error: "Invalid parameters" });
  } else {
    next();
  }
};

export const errorNotaId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if(!id || isNaN(Number(id))) {
    return res.status(Status.BedRequest).json({ error: "Invalid type id" });
  } else {
    next();
  }
};

export const errorValor = (req: Request, res: Response, next: NextFunction) => {
  const { valor, semestre } = req.body;
  if(!valor || isNaN(Number(valor)) || !semestre) {
    return res.status(Status.BedRequest).json({ error: "Invalid parameters" });
  } else {
    next();
  }
};