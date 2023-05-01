import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";

const expenses = [
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
    return (
        <Card className="expenses">
            {expenses.map(expense => <ExpenseItem item={expense} key={expense.id} />)}
        </Card>
    );
}

export default Expenses;