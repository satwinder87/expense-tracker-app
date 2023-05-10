import './Chart.css';
import ChartBar from "./ChartBar";

function Chart(props){
    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...valueArray);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} label={dataPoint.label} value={dataPoint.value} maxValue={maxValue} />)}
        </div>
    );
}
export default Chart;