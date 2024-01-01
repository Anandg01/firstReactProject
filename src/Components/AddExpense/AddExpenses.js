import ExpenseForm from "./ExpensesForm";
import './AddExpense.css'
const NewExpenes=(props)=>{
    
    const saveExpenseDate=(data)=>{
        console.log('its reder from add expenses');
      console.log('hit',data)
      props.onAddExpense(data)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onsaveExpense={saveExpenseDate}/>
        </div>
    )

}

export default NewExpenes;