// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "DELETE_COLORS":
      return {
        ...state,
        colors: state.colors.filter((color) => color.id !== action.payload),
      };

    case "ADD_COLORS":
      return {
        ...state,
        colors: [action.payload, ...state.colors],
      };
    default:
      return state;
  }
};
