import ExpenseItem from './ExpenseItem'

import './Expenses.css';
import Card from '../UI/Card';
function Expenses(probs){
    return (
        <Card className='expenses'>
            
            {probs.items.map(expense => {
        return <ExpenseItem
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