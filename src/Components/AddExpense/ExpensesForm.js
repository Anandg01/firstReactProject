import { useState } from "react";
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [ensteredAmout, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState(
    //     {
    //         enteredTitle: '',
    //         enteredAmount: '',
    //         enteredDate: ''
    //     }
    //  )

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
        //    setUserInput((prevState)=>{
        //     return {...prevState,enteredAmount:e.target.value}
        //    })

    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredDate:e.target.value}
        //    })
    }
    const formSubmitHander = (e) => {
        e.preventDefault();

        const expenses = {
            title: enteredTitle,
            amount: ensteredAmout,
            date: new Date(enteredDate)
        }
        props.onsaveExpense(expenses)
        console.log(expenses)
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    }

    return (
        <div>
            <form onSubmit={formSubmitHander}>
                <div className="addExpense-controls">
                    <div className="addExpense-control">
                        <label> Title </label>
                        <input onChange={titleChangeHandler} value={enteredTitle} type="text" />
                    </div>
                    <div>
                        <label>Expense Amount</label>
                        <input onChange={amountChangeHandler} value={ensteredAmout} type="number" />
                    </div>

                    <div>
                        <label>Expense Date</label>
                        <input onChange={dateChangeHandler} value={enteredDate} type="date" />
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