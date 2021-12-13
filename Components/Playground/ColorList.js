import React, { useContext, useState } from "react";
import { ColorContext } from "Components/Context/ColorProvider";
import { IoIosAdd } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import Modal from "./Modal";

export default function ColorList() {
  const { colors, deleteColors } = useContext(ColorContext);
  const [modal, setModal] = useState(false);

  function handleModal(e) {
    e.preventDefault();
    setModal((prev) => !prev);
  }

  return (
    <div className="ring-1 ring-black ring-opacity-10 rounded-md shadow-md mt-14 p-1 relative">
      <div className="p-2 bg-white flex flex-row items-center justify-between">
        <p className="text-xl font-semibold text-gray-600">Color Palette</p>
        <button
          onClick={handleModal}
          className="flex flex-row items-center px-3 font-bold bg-purple-100 hover:bg-purple-200 rounded-md"
        >
          <IoIosAdd className="text-purple-600 text-2xl" />
        </button>
      </div>
      <div className="rounded-md max-h-72 overflow-scroll  shadoe-md scroll-box">
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
    <div className="ring-1 m-1 w-56 ring-black p-1 ring-opacity-10 rounded-md flex flex-row hover:bg-slate-50 items-center justify-between parent">
      <div className="flex flex-row gap-3">
        <div
          className="w-11 h-11 rounded-md"
          style={{ backgroundColor: props.colors.hex }}
        ></div>
        <button onClick={handleDelete}>
          <AiFillDelete size={"1.2em"} className="" />
        </button>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold text-gray-600">
          {props.colors.name}
        </p>
        <p className="text-xs font-semibold text-gray-400">
          {props.colors.hex}
        </p>
      </div>
    </div>
  );
}
