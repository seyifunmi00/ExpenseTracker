import Expenses from "./Expenses";
import AddForm from "./AddForm";
import AddTotal from "./AddTotal";
import { useState } from "react";
function App() {
  const [initialExpenses, setInitialExpenses] = useState([
    {
      id: 118836,
      name: "Watching Netflix",
      category: "entertainment",
      amount: 10,
    },
    {
      id: 118967,
      name: "Going to work",
      category: "transportation",
      amount: 30,
    },
    {
      id: 111111,
      name: "Lunch",
      category: "food",
      amount: 20,
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const handleForm = () => {
    setShowForm(!showForm);
  };

  const addExpense = (newExpense) => {
    setInitialExpenses([...initialExpenses, newExpense]);
    setShowForm(false);
  };

  const deleteExpense = (id) => {
    const newExpenses = initialExpenses.filter((expense) => expense.id !== id);
    setInitialExpenses(newExpenses);
  };

  const totalAmount = initialExpenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  const updateExpense = (id, newName, newAmount, newCategory) => {
    const newExpenses = initialExpenses.map((expense) => {
      if (expense.id === id) {
        return {
          ...expense,
          name: newName,
          amount: newAmount,
          category: newCategory,
        };
      }
      return expense;
    });

    setInitialExpenses(newExpenses);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-4 p-12">
      <h1 className="text-5xl font-bold text-center underline text-teal-500 mb-8">
        Expense Tracker
      </h1>
      <Expenses
        initialExpenses={initialExpenses}
        deleteExpense={deleteExpense}
        updateExpense={updateExpense}
      />
      {showForm && <AddForm addExpense={addExpense} />}
      <button
        className="bg-teal-500 text-white px-8 py-2 rounded-full font-bold shadow-md hover:bg-teal-300"
        onClick={handleForm}
      >
        {showForm ? "Hide Form" : "Add Expenses"}
      </button>

      <AddTotal totalAmount={totalAmount} />
    </main>
  );
}

export default App;
