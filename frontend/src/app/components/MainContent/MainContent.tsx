"use client";
import React, { useEffect, useState } from "react";
import { useFolderStore } from "@/app/store/useFolderStore";
import { EType, FileFolders } from "@/entities/FileFolders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";

export const MainContent = () => {
  const [folderData, setFolderData] = useState<FileFolders[]>([]);
  const { selectedFolderId } = useFolderStore();

  useEffect(() => {
    async function getFolderData(folderId: string) {
      try {
        const folderData = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/explorer/${folderId}`
        );
        const folderDataJson = await folderData.json();
        setFolderData(folderDataJson);
      } catch (error) {
        alert(error);
      }
    }

    if (selectedFolderId) {
      getFolderData(selectedFolderId);
    }
  }, [selectedFolderId]);

  return (
    <div className="col-span-3 overflow-y-auto bg-slate-400 dark:bg-slate-950 rounded-lg p-4">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {folderData.map((folder) => (
          <div className="flex items-center justify-center" key={folder.id}>
            <div className="aspect-square w-5/6 relative rounded-lg overflow-hidden">
              <div className="w-full h-full absolute top-0 left-0 bg-blue-50 opacity-0 hover:opacity-15"></div>
              <div className="w-full h-full flex items-center justify-between flex-col">
                <div className="flex items-center justify-center grow">
                  {folder.type === EType.folder ? (
                    <FontAwesomeIcon icon={faFolder} size="6x" />
                  ) : (
                    <FontAwesomeIcon icon={faFile} size="6x" />
                  )}
                </div>
                <span className="text-xs 2xl:text-sm">{folder.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
