import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.js"
import ExpenseDetails from "./ExpenseDetails.js"
function ExpeseItem(props) {

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails
                title={props.title}
                amount={props.amount}
                location={props.location}
            />
        </div>
    )
}

export default ExpeseItem;