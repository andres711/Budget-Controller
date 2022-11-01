import React, { Fragment, useState } from "react";
import Budget from "./Components/Budget";
import FormExpenses from "./Components/FormExpenses";
import ListExpenses from "./Components/ListExpenses";
import UpdateData from "./Components/UpdateData";

function App() {
  const [budget, saveBudget] = useState(0);
  const [remain, saveRemain] = useState(0);

  const [initbudget, setInitBudget] = useState(true);
  const [expenses, setExpenses] = useState([]);

  const addBudget = (newBudget) => {
    saveBudget(newBudget);
    saveRemain(newBudget);
  };

  const updateData = (expense) => {
    setExpenses([...expenses, expense]);
    saveRemain(remain - expense.quantity);
  };

  const newBudget=(e)=>{
    e.preventDefault()
    saveBudget(0);
    setExpenses([]);
    setInitBudget(true);
  }

  return (
    <Fragment>
      <header>
        <h1>Weekly Expense</h1>
      </header>
      <div className="container">
        <div className="contenido-principal contenido">
          {initbudget ? (
            <Budget addBudget={addBudget} setInitBudget={setInitBudget} />
          ) : (
            <div className="row">
              <div className="six columns">
                <FormExpenses remain={remain} updateData={updateData} />

                <button 
                onClick={newBudget}
                className="button button-primary u-full-width">
                  New Budget
                </button>
              </div>

              <div className="six columns">
              <h2>List of expenses</h2>
                <UpdateData budget={budget} remain={remain} />
                <ListExpenses expenses={expenses} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
