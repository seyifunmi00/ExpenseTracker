/* eslint-disable react/prop-types */

import { useState } from "react";

function Expense({ expense, deleteExpense, updateExpense }) {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const date = `${month}/${day}/${year}`;

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newCategory, setNewCategory] = useState("food");

  const handleEdit = () =>{
    if(newName === "" || newAmount === ""){
      setIsEditing(false);
      return;
    }
    updateExpense(expense.id, newName, newAmount, newCategory);
    setIsEditing(false);
  }

  return (
    <li className="flex flex-col gap-2 items-center justify-center border p-8 rounded-lg mb-4">
      {isEditing ? (
        <>
          <input type="text" className="border rounded p-2 mb-2" placeholder="Name" value={newName} onChange={(e)=> setNewName(e.target.value)} />
          <input type="number" className="border rounded p-2 mb-2"placeholder="Amount" value={newAmount} onChange={(e) => setNewAmount(Number(e.target.value))}/>

          <div className="flex gap-2 items-center justify-center w-full">
            <select className="border rounded-lg p-2 w-full font-bold text-stone-500 mb-4" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
              <option value="food" className="text-stone-500 font-bold">
                Food
              </option>
              <option
                value="entertainment"
                className="text-stone-500 font-bold"
              >
                Entertainment
              </option>
              <option
                value="transportation"
                className="text-stone-500 font-bold"
              >
                Transportation
              </option>
            </select>
          </div>
          <button className="bg-teal-500 text-white px-8 py-2 rounded-full font-bold shadow-md hover:bg-teal-300" onClick={handleEdit}>
            Save
          </button>
          <button
            className="bg-red-500 text-white px-8 py-2 rounded-full font-bold shadow-md hover:bg-red-300"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h2 className="font-bold text-center text-teal-500">
            {expense.name}
          </h2>
          <p className="text-center text-stone-500 font-bold">
            ${expense.amount}
          </p>
          <p className="text-center text-stone-500 font-bold">Date: {date}</p>
          <button
            className="bg-teal-500 text-white px-8 py-2 rounded-full font-bold shadow-md hover:bg-teal-300"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="bg-teal-500 text-white px-8 py-2 rounded-full font-bold shadow-md hover:bg-teal-300"
            onClick={() => deleteExpense(expense.id)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default Expense;
