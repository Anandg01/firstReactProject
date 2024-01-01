import { useState } from "react";
const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [ensteredAmout, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState(
        {
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        }
     )

    const titleChangeHandler = (e) => {
      //  setEnteredTitle(e.target.value)
      setUserInput((prevState)=>{
        return {...prevState,enteredTitle:e.target.value}
       })
    }
    const amountChangeHandler = (e) => {
       // setEnteredAmount(e.target.value)
       setUserInput((prevState)=>{
        return {...prevState,enteredAmount:e.target.value}
       })

    }

    const dateChangeHandler = (e) => {
        //setEnteredDate(e.target.value)
        setUserInput((prevState)=>{
            return {...prevState,enteredDate:e.target.value}
           })
    }
    const formSubmitHander = (e) => {
        e.preventDefault();
        console.log(userInput)
    }

    return (
        <div>
            <form onSubmit={formSubmitHander}>
                <div className="addExpense-controls">
                    <div className="addExpense-control">
                        <label> Title </label>
                        <input onChange={titleChangeHandler} type="text" />
                    </div>
                    <div>
                        <label>Expense Amount</label>
                        <input onChange={amountChangeHandler} type="number" />
                    </div>

                    <div>
                        <label>Expense Date</label>
                        <input onChange={dateChangeHandler} type="date" />
                    </div>
                </div>
                <div>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;