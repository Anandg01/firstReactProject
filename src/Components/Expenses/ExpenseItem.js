import { useState } from "react"
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.js"
import ExpenseDetails from "./ExpenseDetails.js"
import Card from '../UI/Card.js'
const ExpeseItem = (props) => {

    console.log("Expense item evaluated by react.");

    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        console.log('clicked!')
        setTitle('updated!')
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails
                title={title}
                amount={props.amount}
                location={props.location}
            />
            <button onClick={clickHandler}>Delete</button>
        </Card>
    )
}

export default ExpeseItem;