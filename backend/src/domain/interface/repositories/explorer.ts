import { FileFolders} from "@prisma/client";
import { IExplorerParam } from "../../entities/file-folders";

export interface IExplorerRepository {
  getFolderContent(param?: IExplorerParam): Promise<FileFolders[]>
}