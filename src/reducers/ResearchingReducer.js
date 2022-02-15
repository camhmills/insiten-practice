import companyData from "../data/CompanyData";

const initialState = companyData;

const ResearchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESEARCHING_COMPANY":
      return [...state, action.payload];
    case "REMOVE_RESEARCHING_COMPANY":
      const originalState = state;
      const newState = originalState.filter(
        (company) => company.name !== action.payload
      );
      return newState;
    case "UPDATE_RESEARCHING_COMPANY":
      const updateState = state;
      updateState.map(company => {
        if (company.name === action.payload.name) {
          company.type = action.payload.type;
          company.margin = action.payload.margin;
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};

export default ResearchingReducer;
