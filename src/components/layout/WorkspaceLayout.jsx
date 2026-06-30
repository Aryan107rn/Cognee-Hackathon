import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function WorkspaceLayout() {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground">

      <Navbar />

      <div className="flex flex-1 overflow-hidden">

        <Sidebar />

        {/* Chat Area */}

        <main className="flex-1 border-x border-border bg-background">

        </main>

        {/* Knowledge Graph */}

        <aside className="w-80 border-l border-border bg-background">

        </aside>

      </div>

      {/* Bottom Panel */}

      <div className="h-40 border-t border-border bg-background">

      </div>

    </div>
  );
}