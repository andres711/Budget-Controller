import Expense from "./Expense";

function ListExpenses({ expenses }) {
  return (
    <div className="gastos-realizados">
      

      {expenses
        ? expenses.map((expense, id) => <Expense key={id} expense={expense} />)
        : null}
    </div>
  );
}

export default ListExpenses;
