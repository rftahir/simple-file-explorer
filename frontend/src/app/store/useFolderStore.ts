
import { FoldersState } from "@/entities/FileFolders";
import { create } from "zustand";


export const useFolderStore = create<FoldersState>((
    (set) => ({
        selectedFolderId: null,
        setSelectedFolderId: (selectedFolderId) => set({ selectedFolderId }),
    })
));