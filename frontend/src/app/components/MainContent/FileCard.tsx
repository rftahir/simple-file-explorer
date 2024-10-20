import React from "react";
import { IFolderFileComponent } from "@/entities/FileFolders";


export const FileCard = ({item}: IFolderFileComponent) => {

  return(
    <div className="w-full h-full flex items-center justify-between flex-col">
      <span>{item.title}</span>
    </div>
  )
}