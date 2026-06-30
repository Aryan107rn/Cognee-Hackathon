import {
  GitBranch,
  Users,
  FolderGit2
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-border bg-background">

      <div className="p-5">

        <h2 className="text-sm text-muted-foreground mb-3">

          WORKSPACE

        </h2>

        <div className="rounded-lg border border-border p-4">

          Hackathon

        </div>

      </div>

      <div className="px-5">

        <div className="flex items-center gap-2 mb-3">

          <GitBranch size={16} />

          <span className="font-medium">

            Branches

          </span>

        </div>

        <div className="space-y-2">

          <div>🌿 main</div>

          <div>🌿 backend</div>

          <div>🌿 frontend</div>

          <div>🌿 research</div>

          <div>🌿 docs</div>

        </div>

      </div>

      <div className="px-5 mt-10">

        <div className="flex items-center gap-2 mb-3">

          <Users size={16} />

          <span>

            Team

          </span>

        </div>

        <div className="space-y-2">

          <div>Aryan</div>

          <div>Rahul</div>

          <div>Abhi</div>

          <div>Priya</div>

        </div>

      </div>

    </aside>
  );
}