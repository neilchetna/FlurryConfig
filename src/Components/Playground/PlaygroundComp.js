import Head from "next/head";
import React from "react";
import ColorList from "./ColorList";

export default function PlaygroundComp() {
  return (
    <div className="bg-gray-900 h-screen">
      <Head>
        <title>Flurry Config</title>
      </Head>
      <main>
        <Header />
        <div className="flex justify-center items-center text-coolgray-50">
          <ColorList />
        </div>
      </main>
    </div>
  );
}

function Header() {
  return (
    <div className="fixed flex z-50 text-white bg-coolgray-900 justify-center p-4 inset-0 h-14 border-b border-bluegray-800">
      <div className="h-full flex items-center justify-between w-full max-w-screen-lg ">
        <p className="text-lg text-blue-600 font-mono font-bold">
          Flurry Config
        </p>
        <a href="#">icons</a>
      </div>
    </div>
  );
}
