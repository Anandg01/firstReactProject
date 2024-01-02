
const ExpenseFilter = (props) => {
    const optionChangeHandler = (e) => {
        console.log(e.target);
        props.onChanged(e.target.value);
    }
    return (
        <div>
            <label>Filter by Year</label>
            <select value={props.selected} onChange={optionChangeHandler}>
                <option value='2024'>2024</option>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>

            </select>
        </div>
    )
}


export default ExpenseFilter;