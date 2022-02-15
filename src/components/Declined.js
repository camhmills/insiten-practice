import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CompanyCard, CompanyColumn } from "../styled-components/CompanyContainer";

export default function Declined() {
  const dispatch = useDispatch();

  const [company, setCompany] = useState({name: "", type: "", margin: ""})
  const [toggle, setToggle] = useState(false);

  const data = useSelector((state) => state.DeclinedReducer);

  const onSubmitForm = (e) => {
      e.preventDefault();
      dispatch({type:"DECLINED_COMPANY", payload: company})
  }

  return (
    <div>
      Declined
      {data.map((company, index) => {
        return (
            <CompanyCard key={index}>
            <h4>{company.name}</h4>
            <h4>{company.type}</h4>
            <h4>{company.margin}</h4>
            <button onClick={() => dispatch({type:"REMOVE_DECLINED_COMPANY", payload: company.name})}>Remove</button>
          </CompanyCard>
        );
      })}
      <div>
        <button onClick={() => setToggle(!toggle)}>+</button>
        {toggle ? (
          <CompanyCard>
            <form onSubmit={onSubmitForm}>
              <input placeholder="Company Name" name = "name" onChange={(e) => setCompany({...company, [e.target.name]: e.target.value})}/>
              <input placeholder="Type" name = "type" onChange={(e) => setCompany({...company, [e.target.name]: e.target.value})}/>
              <input placeholder="Margin" name = "margin" onChange={(e) => setCompany({...company, [e.target.name]: e.target.value})}/>
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