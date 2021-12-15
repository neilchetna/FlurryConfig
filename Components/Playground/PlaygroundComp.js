import React from "react";
import ColorList from "./ColorList";
import Download from "./Download";

export default function PlaygroundComp() {
  return (
    <>
      <div className="h-[100vh]">
        <ColorList />
        <Download />
      </div>
    </>
  );
}
