import { Request, Response, NextFunction } from "express";
import { Status } from '../Status';

export const errorIdDiretor = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    return res.status(Status.BedRequest).json({ error: "Invalid parameters" });
  } else if (isNaN(Number(id))) {
    return res.status(Status.BedRequest).json({ error: "Invalid id type" });
  } else {
    next()
  }
}

export const errorDiretor = (req: Request, res: Response, next: NextFunction) => {
  const { nome, email } = req.body;
  if (!nome || !email || nome.length === 0 || email.length === 0) {
    return res.status(Status.BedRequest).json({ error: "Invalid parameters" });
  } else {
    next()
  }
}

export const errorPutDiretor = (req: Request, res: Response, next: NextFunction) => {
  const { nome } = req.body;
  if (!nome || nome.length === 0) {
    return res.status(Status.BedRequest).json({ error: "Invalid parameters" });
  } else {
    next()
  }
}