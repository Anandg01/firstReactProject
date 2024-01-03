import { useState } from 'react';
import ExpenseItem from './ExpenseItem'
import ExpeseFilter from './ExpenseFilter'
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(probs) {

  const [filteredYear, setFilteredYear] = useState('2024');

  const filderedChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear, 'expesnes')
  }

  const filteredExpense = probs.items.filter((expense) => {
    return expense.date.getFullYear() === Number(filteredYear)
  })


  let expensesContent = <p>No Expense find</p>;

  if (filteredExpense.length === 1) {
    expensesContent = filteredExpense.map(expense => {
      return <> <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      ></ExpenseItem>
      <p>Add more Expenses</p>
      </>
    })
  }

  else if(filteredExpense.length>0) {
    expensesContent = filteredExpense.map(expense => {
      return <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      ></ExpenseItem>
    })
  }

  return (
    <Card className='expenses'>
      <ExpeseFilter selected={filteredYear} onChanged={filderedChangedHandler} />

      {expensesContent}

    </Card>
  )
}

export default Expenses;