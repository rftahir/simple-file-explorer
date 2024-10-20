
export interface FoldersState {
    selectedFolderId: string | null;
    setSelectedFolderId: (folderId: string) => void;
}

export interface IFolderFileComponent {
  item: FileFolders
}

export enum EType {
  "file" = "file",
  "folder" = "folder",
}

export interface FileFolders {
  id: string;
  title: string;
  type: EType;
  parentId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IExplorerReturn extends FileFolders{
  child?: IExplorerReturn[]
}