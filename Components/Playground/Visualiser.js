import React, { useContext, useState } from "react";
import VisualiserBg from "./VisualiserBg";
import { Listbox } from "@headlessui/react";
import { ColorContext } from "Components/Context/ColorProvider";

export default function Visualiser() {
  const { colors } = useContext(ColorContext);
  const [background, setBackground] = useState(colors[2]);
  const [foreground, setForeground] = useState(colors[1]);
  const [accent, setAccent] = useState(colors[0]);

  return (
    <div className="ring-2 grow h-full ring-black ring-opacity-5 w-full hidden p-8 shadow-md rounded-md md:flex flex-col justify-start gap-8 items-start w-full ">
      <VisualiserBg
        accent={accent.hex}
        background={background.hex}
        foreground={foreground.hex}
      />
      <div className="flex flex-row gap-3 w-full">
        <Dropdown
          title="Background"
          selectedColor={background}
          setSelectedColor={setBackground}
          colors={colors}
        />
        <Dropdown
          title="Foreground"
          selectedColor={foreground}
          setSelectedColor={setForeground}
          colors={colors}
        />
        <Dropdown
          title="Accent"
          selectedColor={accent}
          setSelectedColor={setAccent}
          colors={colors}
        />
      </div>
    </div>
  );
}

function Dropdown({ selectedColor, setSelectedColor, colors, title }) {
  return (
    <>
      <Listbox
        as="div"
        className="relative grow"
        value={selectedColor}
        onChange={setSelectedColor}
        horizontal
      >
        <p className="m-1 text-slate-600 font-medium">{title}</p>
        <Listbox.Button className="ring-1 m-1 ring-black p-1 ring-opacity-10 w-full rounded-md flex flex-row hover:bg-slate-50 items-center justify-between parent group">
          <div className="flex w-full justify-between items-center flex-row gap-3">
            <div
              className="w-9 h-9 rounded-md"
              style={{ backgroundColor: selectedColor.hex }}
            ></div>

            <p className="text-lg font-semibold text-gray-600">
              {selectedColor.name}
            </p>
          </div>
        </Listbox.Button>
        <Listbox.Options className="absolute p-1 bg-slate-100 h-56 w-full overflow-scroll scroll-box bg-white rounded-md">
          {colors.map((color, index) => (
            <Listbox.Option
              className="ring-1 w-full m-1 ring-black p-1 ring-opacity-10 rounded-md flex flex-row hover:bg-purple-100 items-center justify-between parent group bg-white"
              key={index}
              value={color}
            >
              <div className="flex w-full justify-between items-center flex-row gap-3">
                <div
                  className="w-9 h-9 rounded-md"
                  style={{ backgroundColor: color.hex }}
                ></div>

                <p className="text-lg font-semibold text-gray-600">
                  {color.name}
                </p>
              </div>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </>
  );
}
