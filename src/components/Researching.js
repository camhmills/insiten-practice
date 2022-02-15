import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ButtonContainer,
  CompanyCard,
  CompanyColumn,
} from "../styled-components/CompanyContainer";

export default function Researching() {
  const dispatch = useDispatch();

  const [company, setCompany] = useState({ name: "", type: "", margin: "" });
  const [addToggle, setAddToggle] = useState(false);
  const [updateToggle, setUpdateToggle] = useState(false);

  const data = useSelector((state) => state.ResearchingReducer);

  const onSubmitAddForm = (e) => {
    e.preventDefault();
    dispatch({ type: "RESEARCHING_COMPANY", payload: company });
  };

  const onSubmitUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_RESEARCHING_COMPANY", payload: company });
  };

  const moveToNext = (company) => {
    dispatch({ type: "PENDING_COMPANY", payload: company });
    dispatch({ type: "REMOVE_RESEARCHING_COMPANY", payload: company.name });
  };

  return (
    <div>
      Researching
      {data.map((company, index) => {
        return (
          <CompanyCard key={index}>
            <h4>{company.name}</h4>
            <h4>Location Type: {company.type}</h4>
            <h4>Margin: {company.margin}</h4>
            <ButtonContainer>
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_RESEARCHING_COMPANY",
                    payload: company.name,
                  })
                }
              >
                Remove
              </button>
              <button onClick={() => setUpdateToggle(!updateToggle)}>
                Update
              </button>
              <button onClick={() => moveToNext(company)}>To Pending</button>
            </ButtonContainer>
            {updateToggle ? (
              <form onSubmit={onSubmitUpdate}>
                <input
                  placeholder="Type"
                  name="type"
                  onChange={(e) =>
                    setCompany({
                      ...company,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <input
                  placeholder="Margin"
                  name="margin"
                  onChange={(e) =>
                    setCompany({
                      ...company,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <button>Submit</button>
              </form>
            ) : (
              <></>
            )}
          </CompanyCard>
        );
      })}
      <div>
        <button onClick={() => setAddToggle(!addToggle)}>+</button>
        {addToggle ? (
          <CompanyCard>
            <form onSubmit={onSubmitAddForm}>
              <input
                placeholder="Company Name"
                name="name"
                onChange={(e) =>
                  setCompany({ ...company, [e.target.name]: e.target.value })
                }
              />
              <input
                placeholder="Type"
                name="type"
                onChange={(e) =>
                  setCompany({ ...company, [e.target.name]: e.target.value })
                }
              />
              <input
                placeholder="Margin"
                name="margin"
                onChange={(e) =>
                  setCompany({ ...company, [e.target.name]: e.target.value })
                }
              />
              <button>Add</button>
            </form>
          </CompanyCard>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
