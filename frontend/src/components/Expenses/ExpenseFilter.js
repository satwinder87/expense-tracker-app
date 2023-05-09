import './ExpenseFilter.css';

function ExpenseFilter(props){

    function valueSelectedHandler(event){
        props.onSelection(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <label>Filter by year</label>
            <select onChange={valueSelectedHandler}>
                <option value='2024'>2024</option>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    );
}

export default ExpenseFilter;