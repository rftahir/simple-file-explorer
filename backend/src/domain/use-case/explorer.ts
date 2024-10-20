import { FileFolders } from "@prisma/client";
import { IExplorerReturn } from "../entities/file-folders";
import { IExplorerRepository } from "../interface/repositories/explorer";
import { IExplorerUseCase } from "../interface/use-case/explorer";
import { NotFoundErrors } from "../../errors/NotFoundErrors";


export class ExplorerUseCase implements IExplorerUseCase {
  explorerRepository: IExplorerRepository;

  constructor(explorerRepository: IExplorerRepository){
    this.explorerRepository = explorerRepository
  }


  async getFolderStructure(parentId?: string | null): Promise<IExplorerReturn[]> {
    const folderData = await this.explorerRepository.getFolderContent({
      filter: {
        parentId: parentId ? parentId : null,
        type: "folder"
      },
      sort: [
        { title: "asc" }
      ]
    });

    const folderMap: Promise<IExplorerReturn[]> = Promise.all(
      folderData.map(async (folder) => {
        const child = await this.getFolderStructure(folder.id);

        return {
          ...folder,
          child
        }
      })
    )

    return folderMap;

  }
  
  async getFolderContent(parentId: string): Promise<FileFolders[]> {
    const folderData = await this.explorerRepository.getFolderContent({
      filter: {
        parentId
      }
    });
    
    return folderData;
  } 

}