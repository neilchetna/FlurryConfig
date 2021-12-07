import React, { createContext, useReducer } from "react";
import ColorReducer from "./ColorReducer";

const initialState = {
  colors: [],
};

export const ColorContext = createContext(initialState);

export const ColorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ColorReducer, initialState);

  function addColors(color) {
    dispatch({
      type: "ADD_COLORS",
      payload: color,
    });
  }

  return (
    <ColorContext.Provider value={{ colors: state.colors, addColors }}>
      {children}
    </ColorContext.Provider>
  );
};
