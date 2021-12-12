import React, { useContext } from "react";
import { ColorProvider } from "Components/Context/ColorProvider";
import PlaygroundComp from "Components/Playground/PlaygroundComp";
import Layout from "Components/Layout/Layout";

export default function Playground() {
  return (
    <ColorProvider>
      <PlaygroundComp />
    </ColorProvider>
  );
}

Playground.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
