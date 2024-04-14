import {Pie} from "react-chartjs-2"
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";
import { pieChartData } from "../FAKE_DATA";

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

export const PieChart=()=>{
    const options={
        plugins: {
            legend: {
                display: false
            },
        }
    };
    return <Pie options={options} data={pieChartData}/>;
}