import React, { useContext, useState } from "react";
import { ColorContext } from "Components/Context/ColorProvider";
import { IoIosAdd } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import Modal from "./Modal";

export default function ColorList() {
  const { colors } = useContext(ColorContext);
  const [modal, setModal] = useState(false);

  function handleModal(e) {
    e.preventDefault();
    setModal((prev) => !prev);
  }

  return (
    <div className="ring-2 ring-black ring-opacity-5 rounded-md shadow p-1 relative grow">
      <div className="p-1 bg-white flex flex-row items-center justify-between">
        <p className="text-xl font-semibold text-gray-500">Color Palette</p>
        <button
          onClick={handleModal}
          className="flex flex-row items-center px-3 font-semibold bg-purple-100 h-8 text-purple-700 hover:bg-purple-200 rounded-md"
        >
          <IoIosAdd className="text-purple-600 text-2xl" /> Add
        </button>
      </div>
      <div className="rounded-md h-full overflow-scroll  shadoe-md scroll-box">
        {colors.map((color, index) => (
          <Block key={index} colors={color} />
        ))}
      </div>

      <Modal modalState={modal} setModalState={setModal} />
    </div>
  );
}

function Block(props) {
  const { deleteColors } = useContext(ColorContext);

  function handleDelete(e) {
    e.preventDefault();

    deleteColors(props.colors.id);
  }

  return (
    <div className="ring-1 m-1 ring-black p-1 ring-opacity-10 rounded-md flex flex-row hover:bg-slate-50 items-center justify-between parent group">
      <div className="flex flex-row gap-3">
        <div
          className="w-11 h-11 rounded-md"
          style={{ backgroundColor: props.colors.hex }}
        ></div>
        <button
          className="group-hover:opacity-70 group-hover:translate-y-0 transform translate-y-1 opacity-0 transition active:ring-1 focus:ring-indigo-600 ease-in-out dealy-75"
          onClick={handleDelete}
        >
          <AiFillDelete size={"1.2em"} />
        </button>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold mt-1 text-gray-600">
          {props.colors.name}
        </p>
        <p className="text-xs font-semibold text-gray-400">
          {props.colors.hex}
        </p>
      </div>
    </div>
  );
}
