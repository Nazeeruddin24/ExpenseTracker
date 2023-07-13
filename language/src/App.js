import React, { useState } from "react";
import './App.css'

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description.trim() === "" || amount.trim() === "") {
      return;
    }
    const expense = {
      id: Math.random().toString(),
      description: description,
      amount: +amount,
    };
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    setDescription("");
    setAmount("");
  };

  const handleDelete = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <form onSubmit={handleSubmit} className="for">
        <div>
          <label >Description:</label>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label>Amount  :  </label>
          <input type="number" value={amount} onChange={handleAmountChange} />
        </div>
        <button type="submit" className="sub">Add Expense</button>
      </form>

      <h3>Expense List:</h3>
      <ul id='txt'>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} : ₹{expense.amount}
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
