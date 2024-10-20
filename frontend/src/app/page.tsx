import { MainContent, Sidebar } from "./components"

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-4 gap-4 w-screen bg-slate-200 dark:bg-slate-800 p-4">
      <Sidebar />
      <MainContent />
    </div>
  );
}
