import { useState } from "react";
import Error from "./Error";

function FormExpenses({ updateData,remain}) {

  //Expense
  const [expense, setExpense] = useState({
    name: "",
    quantity: 0,
  });

  //Error
  const [error,setError]= useState("");

  //Destructuring expense
  const { name, quantity } = expense;

  //Event listener change input
  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    })
  };

  const addExpense = (e) => {
    e.preventDefault();
    //validar
    if(name.trim()==="" ){
      setError("Expense name is required")
      return
    }
    else if(quantity > remain){
      setError("Expense exceed the budget")
      return
    }
    //agregar gasto
    updateData({
      ...expense,
      quantity: parseInt(quantity)
    })
    //limpiar form
    setExpense({
      name: "",
      quantity: 0,
    });
    setError("")
  };

  return (
    <div>
      <form onSubmit={addExpense}>
        <h2>Add your expense</h2>
        <div className="campo">
          <label>Expense name</label>
          <input
            className="u-full-width"
            name="name"
            type="text"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="campo">
          <label>Expense quantity</label>
          <input
            className="u-full-width"
            name="quantity"
            type="number"
            onChange={handleChange}
            value={quantity}
          />
        </div>
        {
          error? (
            <Error error={error}/>
          )
          :
          null
        }
        <button className="button button-primary u-full-width" type="submit">
          Create expense
        </button>
      </form>
    </div>
  );
}

export default FormExpenses;
