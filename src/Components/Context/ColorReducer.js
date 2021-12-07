// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_COLORS":
      return {
        ...state,
        colors: [action.payload, ...state.colors],
      };
    default:
      return state;
  }
};
