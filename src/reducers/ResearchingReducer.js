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
      return updateState.map((company) => {
        if (company.name === action.payload.name) {
          return {
            ...updateState,
            name: action.payload.name,
            type: action.payload.type,
            margin: action.payload.margin,
          };
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};

export default ResearchingReducer;
