/* eslint-disable react/prop-types */
import Expense from "./Expense";

function Expenses({ initialExpenses, deleteExpense, updateExpense}) {
  const renderExpensesByCategory = (category) => {
   return initialExpenses
      .filter((expense) => expense.category === category)
      .map((expense) => <Expense expense={expense} key={expense.id} deleteExpense={deleteExpense} updateExpense={updateExpense} />);
  };
  return (
    <div className="flex items-center justify-center gap-7 flex-wrap">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-4xl font-bold text-center underline text-teal-500">
          Food
        </h2>
        <ul>{renderExpensesByCategory("food")}</ul>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-4xl font-bold text-center underline text-teal-500">
          Entertainment
        </h2>
        <ul>{renderExpensesByCategory("entertainment")}</ul>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="text-4xl font-bold text-center underline text-teal-500">
          Transportation
        </h2>
        <ul>{renderExpensesByCategory("transportation")}</ul>
      </div>



    </div>
  );
}

export default Expenses;
