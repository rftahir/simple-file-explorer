import { FileFolders, Prisma, Type } from "@prisma/client";


export interface IExplorerReturn extends FileFolders{
  child?: IExplorerReturn[]
}

export interface IExplorerParam {
  filter?: Prisma.FileFoldersWhereInput,
  sort?: Prisma.FileFoldersOrderByWithRelationInput[]
}