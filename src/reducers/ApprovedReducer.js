const initialState = [];

const ApprovedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPROVED_COMPANY":
      return [...state, action.payload];
    case "REMOVE_APPROVED_COMPANY":
        const originalState = state
        const newState = originalState.filter(company => company.name !== action.payload);
        return newState
    default:
      return state;
  }
};

export default ApprovedReducer;