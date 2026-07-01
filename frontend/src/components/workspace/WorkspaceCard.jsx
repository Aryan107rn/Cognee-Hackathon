import { Users, GitBranch, Brain } from "lucide-react";

export default function WorkspaceCard({ workspace }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 hover:border-blue-500 transition cursor-pointer">

      <h2 className="text-lg font-semibold">
        {workspace.name}
      </h2>

      <div className="mt-5 space-y-2 text-sm text-zinc-400">

        <div className="flex items-center gap-2">
          <Users size={16} />
          {workspace.members} Members
        </div>

        <div className="flex items-center gap-2">
          <GitBranch size={16} />
          {workspace.branches} Branches
        </div>

        <div className="flex items-center gap-2">
          <Brain size={16} />
          {workspace.memories} Memories
        </div>

      </div>

      <p className="text-xs text-zinc-500 mt-5">
        Updated {workspace.updated}
      </p>

    </div>
  );
}
