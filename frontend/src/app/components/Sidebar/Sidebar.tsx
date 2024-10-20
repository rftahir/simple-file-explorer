import React from "react";
import { Tree } from "./Tree"

export const Sidebar = async () => {
  const treeData = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/explorer`);
  const tree = await treeData.json();


  return (
    <div className="col-span-1 overflow-auto bg-slate-400 dark:bg-slate-950 rounded-lg">
      <div className="max-h-full max-w-full overflow-auto p-4">
        <Tree folders={tree}/>
      </div>
    </div>
  )
}