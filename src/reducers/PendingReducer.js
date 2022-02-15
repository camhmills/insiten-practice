const initialState = [];

const PendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PENDING_COMPANY":
      return [...state, action.payload];
    case "REMOVE_PENDING_COMPANY":
        const originalState = state
        const newState = originalState.filter(company => company.name !== action.payload);
        return newState
    default:
      return state;
  }
};

export default PendingReducer;