import Expense from "./Expense";

function ListExpenses({ expenses }) {
  return (
    <div className="gastos-realizados">
      <h2>List of expenses</h2>

      {expenses
        ? expenses.map((expense, id) => <Expense key={id} expense={expense} />)
        : null}
    </div>
  );
}

export default ListExpenses;
