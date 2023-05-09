import './ExpenseForm.css';
import {useState} from "react";

function ExpenseForm(props){

    const[title,setTitle] = useState('');
    const[amount,setAmount] = useState('');
    const[date,setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
    };

    function amountChangeHandler(event){
        setAmount(event.target.value);
    };

    function dateChangeHandler(event){
        setDate(event.target.value);
    };

    function addExpenseHandler(event){
        event.preventDefault();

        if(title.trim().length === 0 || amount.trim().length === 0 || date.trim().length === 0){
            console.log('Invalid Input, Ignoring form submission');
            return;
        }

        const expenseData = {
            id: Math.random().toString(),
            expenseTitle: title,
            expenseAmount: amount,
            expenseDate: new Date(date)
        };
        console.log(expenseData);
        setTitle('');
        setAmount('');
        setDate('');

        props.addHandler(expenseData);
    }

    return (
        <form onSubmit={addExpenseHandler}>
            <div className="add-expense__controls">
                <div className="add-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={title}/>
                </div>
                <div className="add-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} value={amount} />
                </div>
                <div className="add-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} value={date} min="2020-01-01" max="2025-12-31"/>
                </div>
            </div>
            <div className="add-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;