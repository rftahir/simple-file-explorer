import { Response } from 'express';
import BaseError from '../../errors/BaseErrors';
import { InternalServerError } from '../../errors/InternalServerError';




export const handleRequestError = (res: Response, err: any): void => {
  if (err instanceof BaseError) {
    res.status(err.status || 500).json(err.toJson());
  } else {
    res.status(500).send(new InternalServerError().toJson());
  }
};
