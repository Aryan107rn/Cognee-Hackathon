import { workspaces } from "../data/mockData";
import WorkspaceCard from "../components/dashboard/WorkspaceCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Welcome back 👋</h1>
          <p className="text-zinc-400 mt-2">
            Your AI Collaboration Workspaces
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Workspace
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-12">
        {workspaces.map((workspace) => (
          <WorkspaceCard
            key={workspace.id}
            workspace={workspace}
          />
        ))}
      </div>
    </div>
  );
}