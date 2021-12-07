import Head from "next/head";
import React, { useContext } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { ColorContext } from "./Context/ColorProvider";
import Download from "./Download";

export default function PlaygroundComp() {
  const [colour, setColour] = useColor();
  const { addColors, colors } = useContext(ColorContext);

  function handleColor(e) {
    e.preventDefault();

    const newColor = {
      hex: colour.hex,
      id: Math.floor(Math.random() * 100000000),
    };

    addColors(newColor);
  }

  return (
    <div>
      <Head>
        <title>Playground</title>
      </Head>
      <h1>This is the playground</h1>
      <ColorPicker
        width={250}
        height={228}
        color={colour}
        onChange={setColour}
        hideHSV
        dark
      />
      <p>THE COLOR IS {colour.hex}</p>
      <button onClick={handleColor}>Add Color</button>
      {colors.map((color) => (
        <p style={{ "background-color": color.hex, width: 100 }} key={color.id}>
          {" "}
          .
        </p>
      ))}
      <Download list={JSON.stringify(colors)} />
    </div>
  );
}
