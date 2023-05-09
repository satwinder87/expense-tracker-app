import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import AddExpense from "../NewExpense/AddExpense";
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";

let expenseList = [
    {
        id: 'p1',
        expenseTitle: 'Shoes',
        expenseAmount: 100,
        expenseDate: new Date(2023,3,28)
    },
    {
        id: 'p2',
        expenseTitle: 'Cycle',
        expenseAmount: 1000,
        expenseDate: new Date(2023,4,28)
    },
    {
        id: 'p3',
        expenseTitle: 'Football kit',
        expenseAmount: 10,
        expenseDate: new Date(2023,5,28)
    },
    {
        id: 'p4',
        expenseTitle: 'Hockey shoes',
        expenseAmount: 100,
        expenseDate: new Date(2023,5,28)
    }
];

function Expenses(){
    const[expenses,setExpenses] = useState(expenseList);

    function addExpense(newExpense){
        expenseList = [...expenseList,newExpense];
        setExpenses(expenseList);
    };

    function filterSelected(selectedDate){
        console.log('selectedDate = ' + selectedDate);
        const filteredExpenses = expenseList.filter(expense => expense.expenseDate.getFullYear() === parseInt(selectedDate));
        setExpenses(filteredExpenses);
    };

    return (
        <div>
            <Card className="add-expense">
                <AddExpense onAdd={addExpense} />
            </Card>
            <Card className="expenses">
                <ExpenseFilter onSelection={filterSelected} />
                {expenses.map(expense => <ExpenseItem item={expense} key={expense.id} />)}
            </Card>
        </div>

    );
}

export default Expenses;