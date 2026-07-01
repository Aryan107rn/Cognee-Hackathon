import {
  Brain,
  Search,
  Plus,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950 px-6 flex items-center justify-between">

      {/* Left */}

      <div className="flex items-center gap-8">

        <div className="flex items-center gap-3">

          <Brain className="text-violet-500" size={28} />

          <h1 className="text-xl font-bold">
            BranchMind
          </h1>

        </div>

        <Button
          variant="ghost"
          className="gap-2"
        >
          Workspace

          <ChevronDown size={16} />
        </Button>

      </div>

      {/* Center */}

      <div className="w-[420px] relative">

        <Search
          size={16}
          className="absolute left-3 top-3 text-zinc-500"
        />

        <Input
          placeholder="Search branches, memories..."
          className="pl-10 bg-zinc-900 border-zinc-800"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <Button className="gap-2">

          <Plus size={16} />

          New Branch

        </Button>

        <Avatar>

          <AvatarFallback>

            AN

          </AvatarFallback>

        </Avatar>

      </div>

    </header>
  );
}