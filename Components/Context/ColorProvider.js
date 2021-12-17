import React, { createContext, useReducer } from "react";
import ColorReducer from "./ColorReducer";

const initialState = {
  colors: [
    {
      name: "purple",
      hex: "#a855f7",
      id: 1,
    },
    {
      name: "white",
      hex: "#ffffff",
    },
    {
      name: "gray",
      hex: "#e2e8f0",
    },
  ],
};

export const ColorContext = createContext(initialState);

export const ColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ColorReducer, initialState);

  console.log(ColorReducer);

  function addColors(color) {
    dispatch({
      type: "ADD_COLORS",
      payload: color,
    });
  }

  function deleteColors(id) {
    dispatch({
      type: "DELETE_COLORS",
      payload: id,
    });
  }

  return (
    <ColorContext.Provider
      value={{ colors: state.colors, addColors, deleteColors }}
    >
      {children}
    </ColorContext.Provider>
  );
};
