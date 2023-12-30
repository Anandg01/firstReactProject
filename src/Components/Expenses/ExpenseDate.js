import './ExpenseDate.css'

const ExpenseDate = (props)=> {
    const month = props.date.toLocaleString('en-Us', { month: 'long' });
    const day = props.date.toLocaleString('en-Us', { day: '2-digit' });
    const year = props.date.getFullYear();
   
    return (
        <div className='expenses_date'>
            <div className='expenses__month'>{month}</div>
            <div>{year}</div>
            <div className='expenses__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;