const initialState = [];

const DeclinedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DECLINED_COMPANY":
      return [...state, action.payload];
    case "REMOVE_DECLINED_COMPANY":
        const originalState = state
        const newState = originalState.filter(company => company.name !== action.payload);
        return newState
    default:
      return state;
  }
};

export default DeclinedReducer;