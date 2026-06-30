import { Brain } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <Brain className="text-blue-500" size={28} />
        <h1 className="text-xl font-bold">BranchMind</h1>
      </div>

      <div className="text-zinc-400">
        Profile
      </div>
    </header>
  );
}