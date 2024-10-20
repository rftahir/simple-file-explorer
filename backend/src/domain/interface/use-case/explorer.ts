import { FileFolders } from "@prisma/client"
import { IExplorerReturn } from "../../entities/file-folders"



export interface IExplorerUseCase {
  getFolderStructure(parentId?: string | null): Promise<IExplorerReturn[]>
  getFolderContent(parentId: string): Promise<FileFolders[]>
}