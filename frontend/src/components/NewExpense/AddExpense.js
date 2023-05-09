import './AddExpense.css';
import ExpenseForm from "./ExpenseForm";

function AddExpense(props){
    return (
        <div className="add-expense">
            <ExpenseForm addHandler={props.onAdd} />
        </div>
    );
}

export default AddExpense;