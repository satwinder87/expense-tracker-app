import Chart from "../Chart/Chart";

function ExpenseChart(props){

    const dataPoints = [
        {label : 'Jan', value : 0},
        {label : 'Feb', value : 0},
        {label : 'Mar', value : 0},
        {label : 'Apr', value : 0},
        {label : 'May', value : 0},
        {label : 'Jun', value : 0},
        {label : 'Jul', value : 0},
        {label : 'Aug', value : 0},
        {label : 'Sept', value : 0},
        {label : 'Oct', value : 0},
        {label : 'Nov', value : 0},
        {label : 'Dec', value : 0}
    ];


    let expense;
    for(expense of props.expenses){
        dataPoints[expense.expenseDate.getMonth()].value += expense.expenseAmount;
    }

    return(
        <div>
            <Chart dataPoints={dataPoints}/>
        </div>
    );
}
export default ExpenseChart;