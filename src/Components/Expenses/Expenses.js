import { useState } from 'react';
import ExpenseItem from './ExpenseItem'
import ExpeseFilter from './ExpenseFilter'
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(probs) {

  const [filteredYear, setFilteredYear] = useState('2024');
  const [expenses, setExpenses]=useState(probs.items);
  
  const filderedChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear, 'expesnes')

    console.log(probs.items)

    setExpenses(probs.items.filter((expense)=>{
      return expense.date.getFullYear()===Number(selectedYear)
    }))
  }
  console.log(probs)
  return (
    <Card className='expenses'>
      <ExpeseFilter selected={filteredYear} onChanged={filderedChangedHandler} />

      {expenses.map(expense => {
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