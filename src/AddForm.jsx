/* eslint-disable react/prop-types */
import { useState } from "react";
function AddForm({addExpense}) {

 const year = new Date().getFullYear();
 const month = new Date().getMonth()+1 ;
 const day = new Date().getDate();
 const date = `${month}/${day}/${year}`;

 const [name, setName] = useState("");
 const [amount, setAmount] = useState(""); 
 const [category, setCategory] = useState("food");


 const handleName = (e) => {
  setName(e.target.value);
 }

 const handleAmount = (e) => {
  setAmount(Number(e.target.value));
 }

 const handleCategory = (e) => {
  setCategory(e.target.value);
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  if (name === "" || amount === "") {
    alert("Please fill in all fields");
    return;
  }

  const newExpense = {
    id: Math.floor(Math.random() * 1000000),
    name,
    amount,
    category,
  }

  addExpense(newExpense);
  setName("");
  setAmount("");
  setCategory("food");

  
 }

 

  return (
  <form action="submit" className="flex flex-col gap-4 items-center justify-center w-3/5 p-4" onSubmit={handleSubmit}>
    <h2 className="text-4xl font-bold text-center underline text-teal-500">Add Expense</h2>
    <div className="flex gap-2 items-center justify-center w-full">
    <label htmlFor="name" className="text-teal-500 font-bold">Name:</label>
    <input type="text" placeholder="Enter your name..." value={name} className="border rounded-lg p-2 w-full" onChange={handleName} />
    </div>


    <div className="flex gap-2 items-center justify-center w-full">
    <label htmlFor="name" className="text-teal-500 font-bold">Amount:</label>
    <input type="text" placeholder="Enter the amount..." value={amount} className="border rounded-lg p-2 w-full" onChange={handleAmount} />
    </div>

    <div className="flex gap-2 items-center justify-center w-full">
    <label htmlFor="name" className="text-teal-500 font-bold">Category:</label>
    <select className="border rounded-lg p-2 w-full font-bold text-stone-500 mb-4" onChange={handleCategory} value={category}>
      <option value="food" className="text-stone-500 font-bold">Food</option>
      <option value="entertainment" className="text-stone-500 font-bold">Entertainment</option> 
      <option value="transportation" className="text-stone-500 font-bold">Transportation</option>
    </select>
    </div>

    <div className="flex gap-2 items-center justify-center w-full font-bold text-stone-500">Date: {date}</div>

    <button className="bg-teal-500 text-white px-8 py-2 rounded-full font-bold shadow-md hover:bg-teal-300">Submit</button>
  </form>

  
  )
}

export default AddForm
