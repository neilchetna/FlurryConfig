import React, { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { ColorPicker, useColor } from "react-color-palette";
import { ColorContext } from "Components/Context/ColorProvider";
// import "react-color-palette/lib/css/styles.css";

export default function Modal({ modalState, setModalState }) {
  const [input, setInput] = useState("");
  const [color, setColor] = useColor("hex", "#121212");
  const { addColors } = useContext(ColorContext);

  function handleModal() {
    setModalState((prev) => !prev);
  }

  function handleColor(e) {
    e.preventDefault();

    const data = {
      hex: color.hex,
      name: input,
      id: Math.floor(Math.random() * 100000000),
    };

    console.log(data);
    addColors(data);
    setInput("");
    setModalState((prev) => !prev);
  }
  return (
    <>
      <Dialog open={modalState} onClose={handleModal}>
        <Dialog.Overlay
          as="div"
          className="bg-black w-screen h-screen fixed inset-0 bg-opacity-20 flex items-center justify-center"
        >
          <div className="bg-white rounded-md p-3 flex flex-col justify-center items-center gap-2">
            <ColorPicker
              color={color}
              width={200}
              height={100}
              hideHSV
              dark
              onChange={setColor}
            />
            <form className="" onSubmit={handleColor}>
              <label className="m-2 font-semibold text-slate-500">
                Color Name
              </label>
              <div className="ring-1 mx-2 mb-2 w-56 ring-black ring-opacity-10 rounded-md flex flex-row hover:bg-slate-50 items-center justify-between parent group relative">
                <input
                  className="w-full h-full px-3 py-2 rounded-md text-md font-semibold  placeholder-slate-400 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 focus:outline-none"
                  required
                  placeholder="color"
                  onChange={(e) => setInput(e.target.value)}
                />
                <span
                  style={{ background: color.hex }}
                  className="w-8 h-8 absolute right-[0.125rem] rounded-md"
                ></span>
              </div>
              <div className="flex gap-4 flex-row justify-center mt-3 w-full ">
                <button
                  className="px-4 py-1 bg-blue-100 text-lg text-blue-700 hover:bg-blue-300 active:bg-blue-200 w-24 rounded-md font-semibold"
                  type="submit"
                >
                  Add
                </button>
                <button
                  className="px-4 py-1 bg-red-100 text-lg text-red-700 hover:bg-red-300 active:bg-red-200 w-24 rounded-md font-semibold"
                  onClick={handleModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Dialog.Overlay>
      </Dialog>
    </>
  );
}
