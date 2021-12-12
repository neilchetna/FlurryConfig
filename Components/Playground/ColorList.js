import React, { useContext } from "react";
import { ColorContext } from "Components/Context/ColorProvider";
import { IoIosAdd } from "react-icons/io";

export default function ColorList() {
  const { colors, addColors } = useContext(ColorContext);

  function handleColor(e) {
    e.preventDefault();
    const newColor = {
      hex: "#FEDE01",
      id: 5,
    };
    addColors(newColor);
  }

  return (
    <div className="ring-1 ring-black ring-opacity-10 rounded-md shadow-md mt-14 p-1 relative">
      <div className="p-2 bg-white flex flex-row items-center justify-between">
        <p className="text-xl font-semibold text-gray-600">Color Palette</p>
        <button
          onClick={handleColor}
          className="flex flex-row items-center px-3 font-bold bg-purple-100 text-purple-500 hover:bg-purple-200 rounded-md"
        >
          <IoIosAdd className="text-purple-600 text-2xl" />
        </button>
      </div>
      <div className="rounded-md max-h-72 overflow-scroll  shadoe-md">
        {colors.map((color, index) => (
          <Block key={index} hex={color.hex} />
        ))}
      </div>
    </div>
  );
}

function Block(props) {
  return (
    <div className="ring-1 m-1 w-56 ring-black p-1 ring-opacity-10 rounded-md flex flex-row hover:bg-slate-50 items-center justify-between">
      <div
        className="w-11 h-11 rounded-md"
        style={{ backgroundColor: props.hex }}
      ></div>
      <div className="text-right">
        <p className="text-lg font-semibold text-gray-600">{props.color}</p>
        <p className="text-xs font-semibold text-gray-400">{props.hex}</p>
      </div>
    </div>
  );
}

Block.defaultProps = {
  color: "red",
};
