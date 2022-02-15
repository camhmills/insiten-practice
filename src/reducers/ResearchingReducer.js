import companyData from "../data/CompanyData";

const initialState = companyData;

const ResearchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESEARCHING_COMPANY":
      return [...state, action.payload];
    case "REMOVE_RESEARCHING_COMPANY":
        const originalState = state
        const newState = originalState.filter(company => company.name !== action.payload);
        return newState
    default:
      return state;
  }
};

export default ResearchingReducer;