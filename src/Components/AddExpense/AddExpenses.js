import ExpenseForm from "./ExpensesForm";
import './AddExpense.css'
const NewExpenes=(props)=>{
    
    const saveExpenseDate=(data)=>{
        console.log('its reder from add expenses');
      console.log('hit',data)
      const expense={
        ...data,
        id:Math.random().toString()
      }
      props.onAddExpense(expense)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onsaveExpense={saveExpenseDate}/>
        </div>
    )

}

export default NewExpenes;