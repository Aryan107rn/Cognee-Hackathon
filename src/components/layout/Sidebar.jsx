import { GitBranch, Users } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 p-5">

      <h2 className="text-sm text-zinc-500 mb-4">
        BRANCHES
      </h2>

      <div className="space-y-3">

        <div className="flex items-center gap-2">
          <GitBranch size={16} />
          main
        </div>

        <div className="flex items-center gap-2">
          <GitBranch size={16} />
          backend
        </div>

        <div className="flex items-center gap-2">
          <GitBranch size={16} />
          frontend
        </div>

        <div className="flex items-center gap-2">
          <GitBranch size={16} />
          research
        </div>

      </div>

      <h2 className="text-sm text-zinc-500 mt-10 mb-4">
        TEAM
      </h2>

      <div className="space-y-3">

        <div className="flex items-center gap-2">
          <Users size={16} />
          Aryan
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} />
          Rahul
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} />
          Priya
        </div>

      </div>

    </aside>
  );
}