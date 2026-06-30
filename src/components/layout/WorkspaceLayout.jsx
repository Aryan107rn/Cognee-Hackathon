import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function WorkspaceLayout() {
  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 flex items-center justify-center border-x border-zinc-800">
          <h1 className="text-2xl font-bold">Chat Area</h1>
        </main>

        <aside className="w-80 flex items-center justify-center border-l border-zinc-800">
          <h1 className="text-xl">Knowledge Graph</h1>
        </aside>
      </div>

      <div className="h-32 border-t border-zinc-800 flex items-center justify-center">
        Bottom Panel
      </div>
    </div>
  );
}