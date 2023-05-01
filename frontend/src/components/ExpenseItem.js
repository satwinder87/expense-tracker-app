import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props){
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.item.expenseDate}/>
            <div className="expense-item__description">
                <h2>{props.item.expenseTitle}</h2>
                <div className="expense-item__price">${props.item.expenseAmount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;