"use client";

import { ReactNode } from "react";
import { RoomProvider } from "@/liveblocks.config"; // alias

import { ClientSideSuspense } from "@liveblocks/react"; // npm package
import { LiveMap, LiveList, LiveObject } from "@liveblocks/client";
import { Layer, LayerType } from "@/types/canva";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

const Room = ({ children, roomId, fallback }: RoomProps) => {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{ cursor: null,selection:[], pencilDraft:null,penColor:null }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList(),
      }}
    >
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default Room;
