import { Menu } from "@headlessui/react";
import React from "react";

export default function Options() {
  const options = [
    {
      name: "tailwindcss",
    },
    { name: "scss" },
  ];

  return (
    <Menu as="div" className="relative max-width-screen-md">
      <Menu.Button className="p-3 px-7 rounded-lg font-bold focus:ring-2 shadow-lg bg-sky-200 text-sky-700 shadow-sky-200/50 focus:ring-sky-400">
        Options
      </Menu.Button>
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-noneu">
        {options.map((option, index) => (
          <OptionsList name={option.name} key={index} />
        ))}
      </Menu.Items>
    </Menu>
  );
}

function OptionsList(props) {
  return (
    <Menu.Item>
      <button className="p-3 px-7 w-full hover:bg-sky-50 hover:text-sky-700 rounded-lg font-bold">
        {props.name}
      </button>
    </Menu.Item>
  );
}
