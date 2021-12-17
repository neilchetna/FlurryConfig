import React from "react";
import ColorList from "./ColorList";
import Download from "./Download";
import Visualiser from "./Visualiser";

export default function PlaygroundComp() {
  return (
    <div className="h-[100vh] flex justify-center w-full">
      <div className="flex justify-center items-center md:h-[90%] gap-4 w-full max-w-screen-lg pb-4 px-4 mt-14">
        <Visualiser />
        <div className="h-full m-4 md:m-0 flex flex-col">
          <ColorList />
          <Download />
        </div>
      </div>
    </div>
  );
}
