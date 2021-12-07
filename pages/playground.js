import React, { useContext } from "react";
import { ColorProvider } from "@components/Context/ColorProvider";
import PlaygroundComp from "@components/PlaygroundComp";

export default function Playground() {
  return (
    <ColorProvider>
      <PlaygroundComp />
    </ColorProvider>
  );
}
