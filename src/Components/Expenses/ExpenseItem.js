import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.js"
import ExpenseDetails from "./ExpenseDetails.js"
import Card from '../UI/Card.js'
const ExpeseItem=(props)=> {
   
    const clickHandler =()=>{
        console.log('clicked!')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails
                title={props.title}
                amount={props.amount}
                location={props.location}
            />
            <button onClick={clickHandler}>Delete</button>
        </Card>
    )
}

export default ExpeseItem;