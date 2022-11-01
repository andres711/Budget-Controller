import React from "react";
import { useState } from "react";
import Error from "./Error";

function Budget({ addBudget, setInitBudget }) {

  const [inputBudget, setInputBudget] = useState(0);

  const [error, setError] = useState("");

  const completeBudget = (e) => {
    setInputBudget(parseInt(e.target.value));
  };

  const defineBudget = (e) => {
    e.preventDefault();
    if (inputBudget < 1) {
      setError("The budget can not be negative or 0");
      return;
    } else if (isNaN(inputBudget)) {
      setError("The budget is required");
    } else {
      setError("");
      addBudget(inputBudget);
      setInputBudget(0);
      setInitBudget(false)
    }
  }

  return (
    <div className="container">
      <h2>Complete your budget</h2>
      <form onSubmit={defineBudget}>
        <input
          placeholder="Write your budget"
          type="number"
          className="u-full-width"
          onChange={completeBudget}
        />
        {error ? <Error error={error}/> : null}
        <input
          type={"submit"}
          className="button button-primary u-full-width"
          value="Add your budget"
        />
      </form>
    </div>
  );
}

export default Budget;
