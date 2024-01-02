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
  console.log(probs)
  return (
    <Card className='expenses'>
      <ExpeseFilter selected={filteredYear} onChanged={filderedChangedHandler} />

      {probs.items.map(expense => {
        return <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        ></ExpenseItem>

      })}
    </Card>
  )
}

export default Expenses;