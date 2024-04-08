import { Loader } from "lucide-react";
import Info, { InfoSkeleton } from "./info";
import { ParticipantSkeleton, Participants } from "./participants";
import Toolbar, { ToolbarSkeleton } from "./toolbar";

const Loading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="h-4 w-6 text-muted-foreground animate-spin" />
      <InfoSkeleton />
      <ParticipantSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};

export default Loading;
