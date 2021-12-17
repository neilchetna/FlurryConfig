import React, { useContext, useState } from "react";
import VisualiserBg from "./VisualiserBg";
import { Listbox } from "@headlessui/react";
import { ColorContext } from "Components/Context/ColorProvider";

export default function Visualiser() {
  const { colors } = useContext(ColorContext);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="ring-2 grow h-full ring-black ring-opacity-5 w-full hidden p-8 shadow-md rounded-md md:flex flex-col justify-start gap-8 items-start">
      <VisualiserBg accent={selectedColor.hex} />
      <Dropdown
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        colors={colors}
      />
    </div>
  );
}

function Dropdown({ selectedColor, setSelectedColor, colors }) {
  return (
    <Listbox
      as="div"
      className="relative"
      value={selectedColor}
      onChange={setSelectedColor}
      horizontal
    >
      <Listbox.Button className="ring-1 m-1 ring-black p-1 ring-opacity-10 w-56 rounded-md flex flex-row hover:bg-slate-50 items-center justify-between parent group">
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
      <Listbox.Options className="absolute p-1 bg-slate-100 h-72 overflow-scroll scroll-box bg-white rounded-md">
        {colors.map((color, index) => (
          <Listbox.Option
            className="ring-1 w-56 m-1 ring-black p-1 ring-opacity-10 rounded-md flex flex-row hover:bg-purple-100 items-center justify-between parent group bg-white"
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
  );
}
