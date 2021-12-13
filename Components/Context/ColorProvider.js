import React, { createContext, useReducer } from "react";
import ColorReducer from "./ColorReducer";

const initialState = {
  colors: [
    {
      hex: "#333333",
      id: 1,
    },
    {
      hex: "#000000",
      id: 2,
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
