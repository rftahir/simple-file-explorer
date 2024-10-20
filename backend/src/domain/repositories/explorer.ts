import { FileFolders, Prisma, PrismaClient } from "@prisma/client";
import { IExplorerRepository } from "../interface/repositories/explorer";
import { IExplorerParam } from "../entities/file-folders";
import { isUndefined, omitBy } from "lodash";

export class ExplorerRepository implements IExplorerRepository {

  client: PrismaClient;

  constructor(client: PrismaClient){
    this.client = client
  }

  async getFolderContent(param?: IExplorerParam): Promise<FileFolders[]> {
      const result = this.client.fileFolders.findMany({
        where: omitBy(param?.filter, isUndefined),
        orderBy: param?.sort
      })
      return result;
  }

}