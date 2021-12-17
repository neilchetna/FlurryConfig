import React, { useState, useEffect, useContext } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Switch } from "@headlessui/react";
import { ColorContext } from "Components/Context/ColorProvider";

export default function Download() {
  const [enabled, setEnabled] = useState(false);
  const { colors } = useContext(ColorContext);

  return (
    <div className="rounded-md ring-2 mt-4 ring-black ring-opacity-5 flex justify-between gap-4 shadow items-center p-2">
      <div className="flex felx-row gap-1 text-sm justify-start items-center text-gray-400">
        <p
          className={`${
            enabled ? null : "bg-sky-300 text-white"
          } p-1 rounded-md transition easy-in-out duration-150`}
        >
          Tailwind
        </p>
        <ToggleButton enabled={enabled} setEnabled={setEnabled} />
        <p
          className={`${
            enabled ? "bg-indigo-300 text-white" : null
          } p-1 rounded-md transition easy-in-out duration-150`}
        >
          CSS
        </p>
      </div>
      <button className="h-12 flex flex-row justify-center items-center text-lg font-medium text-purple-700 gap-2 bg-purple-100 px-2 rounded-md">
        <DownloadAttribute colors={colors} Switch={enabled} />
        <AiOutlineDownload />
      </button>
    </div>
  );
}

function DownloadAttribute({ colors, Switch }) {
  const [downloadLink, setDownloadLink] = useState("");

  const css = [{ string: `:root {` }, { string: `}` }];

  const cssFormat = colors
    .map((color) => {
      return ["--", color.name, ": ", color.hex, ";"].join("");
    })
    .join("\n");

  const finalCss = [css[0].string, cssFormat, css[1].string].join("\n");

  const tw = [
    {
      string: `module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {`,
    },
    {
      string: `},
    },
  },
  plugins: [],
};`,
    },
  ];

  const twFormat = colors
    .map((color) => {
      return [color.name, ": ", color.hex].join("");
    })
    .join("\n");

  const finalTw = [tw[0].string, twFormat, tw[1].string].join("\n");

  const makeCssFile = () => {
    const data = Switch
      ? new Blob([finalCss], { type: "application/css" })
      : new Blob([finalTw], { type: "application/js" });

    console.log(data);

    if (downloadLink !== "") window.URL.revokeObjectURL(downloadLink);

    setDownloadLink(window.URL.createObjectURL(data));
  };

  useEffect(() => {
    makeCssFile();
    // eslint-disable-next-line
  }, [Switch]);

  return (
    <a
      download={`${Switch ? "styles.css" : "tailwind.config.js"}`}
      href={downloadLink}
    >
      Download
    </a>
  );
}

function ToggleButton({ enabled, setEnabled }) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-indigo-300" : "bg-sky-200"
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full ease-in-out accent-purple-100 duration-150 transition`}
      />
    </Switch>
  );
}
