import './App.css';
import { useState } from 'react';
import ExpenseList from './Components/ExpenseList';
import NavBar from './Components/NavBar';
import ExpenseFilter from './Components/ExpenseFilter';

function App() {

  const [expenses, setExpenses] = useState([
    {id:1, description:"Groceries", amount:"200", category:"Food"},
    {id:2, description:"Rent", amount:"2000", category:"Utilities"},
    {id:3, description:"Electricity", amount:"1000", category:"Utilities"},
    {id:4, description:"Dstv", amount:"500", category:"Entertainment"},
    {id:5, description:"Clothes", amount:"2000", category:"Clothing"},
  ]);

  const deleteItem = (id) => {
    setExpenses (expenses.filter(expense => expense.id !== id))
  }

  
  const filterItem = (categ) => {
    setExpenses(expenses.filter(expense => expense.category === categ))
  }

  return (
    <div className="App">
      <NavBar/>
      <ExpenseFilter filterItem = {filterItem}/>
      <ExpenseList items = {expenses} deleteItem = {deleteItem}/>
    </div>
  );
}

export default App;
