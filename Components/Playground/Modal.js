import React, { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { ColorPicker, useColor } from "react-color-palette";
import { ColorContext } from "Components/Context/ColorProvider";
// import "react-color-palette/lib/css/styles.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");
  const [color, setColor] = useColor("hex", "#121212");
  const { addColors } = useContext(ColorContext);

  function handleModal() {
    setModal(!modal);
  }

  function handleColor(e) {
    e.preventDefault();

    const data = {
      hex: color.hex,
      name: input,
    };

    console.log(data);
    addColors(data);
    setInput("");
    handleModal();
  }
  return (
    <>
      <button onClick={handleModal}>Press</button>
      <Dialog open={modal} onClose={handleModal}>
        <Dialog.Overlay
          as="div"
          className="bg-black w-screen h-screen fixed inset-0 bg-opacity-20 flex items-center justify-center"
        >
          <div className="bg-white rounded-md w-72 h-72">
            <ColorPicker
              color={color}
              width={200}
              height={100}
              hideHSV
              dark
              onChange={setColor}
            />
            <form onSubmit={handleColor}>
              <input required onChange={(e) => setInput(e.target.value)} />
              <button type="submit">activate</button>
            </form>
            <button onClick={handleModal}>Cancel</button>
          </div>
        </Dialog.Overlay>
      </Dialog>
    </>
  );
}
