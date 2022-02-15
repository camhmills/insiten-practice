import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    ButtonContainer,
  CompanyCard,
  CompanyColumn,
} from "../styled-components/CompanyContainer";

export default function Pending() {
  const dispatch = useDispatch();

  const [company, setCompany] = useState({ name: "", type: "", margin: "" });
  const [toggle, setToggle] = useState(false);

  const data = useSelector((state) => state.PendingReducer);

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch({ type: "PENDING_COMPANY", payload: company });
  };

  const moveToApproved = (company) => {
    dispatch({ type: "APPROVED_COMPANY", payload: company });
    dispatch({ type: "REMOVE_PENDING_COMPANY", payload: company.name });
  };

  const moveToDeclined = (company) => {
    dispatch({ type: "DECLINED_COMPANY", payload: company });
    dispatch({ type: "REMOVE_PENDING_COMPANY", payload: company.name });
  };

  return (
    <div>
      Pending Approval
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
                  type: "REMOVE_PENDING_COMPANY",
                  payload: company.name,
                })
              }
            >
              Remove
            </button>
            <button onClick={() => moveToApproved(company)}>To Approved</button>
            <button onClick={() => moveToDeclined(company)}>To Declined</button>
            </ButtonContainer>
          </CompanyCard>
        );
      })}
      <div>
        <button onClick={() => setToggle(!toggle)}>+</button>
        {toggle ? (
          <CompanyCard>
            <form onSubmit={onSubmitForm}>
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
