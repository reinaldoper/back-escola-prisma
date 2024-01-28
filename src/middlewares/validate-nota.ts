import { Request, Response, NextFunction } from "express";
import { Status } from '../Status';

export const errorNotas = (req: Request, res: Response, next: NextFunction) => {
  const { valor, alunoId } = req.body;
  if(!valor || !alunoId) {
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
  const { valor } = req.body;
  if(!valor || isNaN(Number(valor))) {
    return res.status(Status.BedRequest).json({ error: "Invalid parameters" });
  } else {
    next();
  }
};