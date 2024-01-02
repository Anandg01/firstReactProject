import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import AddExpenses from './Components/AddExpense/AddExpenses';
const dummyExpenses = [
  { id:'e1', title: 'Food', amount: 890.9, date: new Date(2023, 9, 23), location: "delhi" },
  { id:'e2', title: 'Mobile', amount: 8990.9, date: new Date(2023, 11, 23), location: "blp" },
  { id:'e3', title: 'Shoping', amount: 990.9, date: new Date(2023, 8, 8), location: 'brk' },
  { id:'e4', title: 'Chair', amount: 700.9, date: new Date(2023, 9, 27), location: "uk" },
  { id:'e5', title: 'Keybord', amount: 890.9, date: new Date(2023, 10, 25), location: "pnb" },
]

const App=()=> {
const [expenses, setExpenses]= useState(dummyExpenses);
 
const expenseHandler=(expense)=>{
    console.log('app',expenses)
    setExpenses((prevExpenses)=>{
     return [...prevExpenses,expense]
    });
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <AddExpenses onAddExpense={expenseHandler} />
      <Expenses items={expenses} ></Expenses>
    </div>
  );
}

export default App;
