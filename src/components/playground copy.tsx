// Playground.tsx
import React from "react";
import { ChatWindow } from "./ChatWindow";
import { ChatHistory } from "./ChatHistory";

interface PlaygroundProps {
  token: string;
}

export function Playground({ token }: PlaygroundProps) {
  return (
    <div className="min-h-screen flex">
      {/* Chat History on the left */}
      <div className="w-1/4 border-r">
        <ChatHistory token={token} />
      </div>

      {/* Chat Window on the right */}
      <div className="w-3/4">
        <ChatWindow />
      </div>
    </div>
  );
}
