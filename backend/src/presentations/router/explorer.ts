import { Request, Response, Router } from "express";
import { param, validationResult } from 'express-validator';
import { IExplorerUseCase } from "../../domain/interface/use-case/explorer";
import { handleRequestError } from "../handlers/handleRequestError";
import { HttpStatusCode } from "axios";
import { ValidationErrors } from "../../errors/ValidationErrors";


export default function ExplorerRouter(explorerUseCase: IExplorerUseCase) {
  const router = Router();

  router.get(
    '/',
    async (req: Request, res: Response) => {
      try {
        const result = await explorerUseCase.getFolderStructure();
        res.status(HttpStatusCode.Ok).send(result);
      } catch (error) {
        console.log(error);
        handleRequestError(res, error);
      }
    } 
  )

  router.get(
    '/:parentId',
    param('parentId').notEmpty(),
    async (req: Request, res: Response) => {
      try {
        const validation = validationResult(req);

        if (validation.isEmpty()) {
          const {parentId} = req.params
          const result = await explorerUseCase.getFolderContent(parentId);
          res.status(HttpStatusCode.Ok).send(result);
          return;
        }

        throw new ValidationErrors(validation.array());
      } catch (error) {
        console.log(error);
        handleRequestError(res, error);
      }
    } 
  )

  return router;
} 