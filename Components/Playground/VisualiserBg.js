import React from "react";

export default function VisualiserBg({
  background = "#e2e8f0",
  foreground = "#ffffff",
  accent = "#a855f7",
  elements = "black",
}) {
  return (
    <div className="w-full z-auto rounded-md overflow-hidden ring-2 ring-black ring-opacity-5 aspect-[4/3] rounded-md">
      <div className="w-full h-7 flex flex-row gap-1 bg-slate-800 p-2 items-center">
        <div className="bg-red-500 rounded-full w-2 h-2"></div>
        <div className="bg-green-500 rounded-full w-2 h-2"></div>
        <div className="bg-yellow-500 rounded-full w-2 h-2"></div>
      </div>
      <div
        style={{ background: foreground }}
        className="w-full pl-4 h-7 flex felx-row p-1 items-center gap-4"
      >
        <div
          style={{ background: accent }}
          className="h-5 w-5 rounded-full"
        ></div>
        {[...Array(4)].map((value) => (
          <div
            key={value}
            style={{ background: elements }}
            className="w-10 rounded-full h-1/2 opacity-20"
          ></div>
        ))}
      </div>
      <div
        style={{ background: background }}
        className="w-full h-full bg-gray-50"
      >
        <div
          style={{ background: foreground }}
          className="w-[7rem] h-full flex flex-col items-center gap-3 py-4"
        >
          <div
            style={{ background: elements }}
            className="w-24 h-2 rounded-full opacity-10"
          ></div>
          <div
            style={{ background: accent }}
            className="w-full h-5 opacity-50 flex items-center justify-center"
          >
            <div className="w-24 bg-white h-2 rounded-full"></div>
          </div>
          {[...Array(3)].map((value) => (
            <div
              key={value}
              style={{ background: elements }}
              className="w-24 h-2 rounded-full opacity-10"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
