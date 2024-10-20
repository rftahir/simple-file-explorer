import dotenv from "dotenv";
import express from "express";
import prisma from "./infrastructures/prisma/client";
import server from "./server";
import { ExplorerRepository } from "./domain/repositories/explorer";
import { ExplorerUseCase } from "./domain/use-case/explorer";
import ExplorerRouter from "./presentations/router/explorer";

dotenv.config();
const prismaClient = prisma;

(async () => {
  // Init repo
  const explorerRepository = new ExplorerRepository(prismaClient);

  // Init usecase
  const explorerUseCase = new ExplorerUseCase(explorerRepository);

  //init router
  const v1Router = express();
  server.use("/v1", v1Router);

  const explorerRouter = ExplorerRouter(explorerUseCase);

  v1Router.use('/explorer', explorerRouter);

  
  server.listen(process.env.APP_PORT, () => {
    console.log(`Server running on http://localhost:${process.env.APP_PORT}`);
  });


})()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });