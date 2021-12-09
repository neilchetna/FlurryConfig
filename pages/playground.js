import React, { useContext } from "react";
import { ColorProvider } from "@components/Context/ColorProvider";
import PlaygroundComp from "@components/Playground/PlaygroundComp";

export default function Playground() {
  return (
    <ColorProvider>
      <PlaygroundComp />
    </ColorProvider>
  );
}
