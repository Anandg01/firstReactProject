import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.js"
import ExpenseDetails from "./ExpenseDetails.js"
import Card from '../UI/Card.js'
const ExpeseItem=(props)=> {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails
                title={props.title}
                amount={props.amount}
                location={props.location}
            />
        </Card>
    )
}

export default ExpeseItem;