'use client';

import React from "react";
import { IExplorerReturn } from "@/entities/FileFolders";
import { useFolderStore } from "@/app/store/useFolderStore";
import { twMerge } from "tailwind-merge";

type TTree = {
  folders: IExplorerReturn[]
}

export const Tree = ({folders}: TTree) => {
  const { selectedFolderId, setSelectedFolderId } = useFolderStore();

  const handleItemClick = (itemId: string) => {
    setSelectedFolderId(itemId)
  }

  return (
    <ul className="ml-2">
      {folders.map((folder) => (
        <li key={folder.id}> 
          <div onClick={() => handleItemClick(folder.id)} className={twMerge('flex items-center space-x-2 hover:text-blue-500 hover:bg-slate-50 hover:dark:bg-slate-300 cursor-pointer px-2 mb-1', selectedFolderId === folder.id && 'bg-slate-50 dark:bg-slate-300 text-slate-900')}>
            <span>{folder.title}</span>
          </div>

          {folder.child && folder.child.length > 0 && (
            <div className="ml-2">
              {Tree({folders: folder.child})}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}