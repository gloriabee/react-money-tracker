import {Pie} from "react-chartjs-2"
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";
ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)


export const PieChart=({transactions})=>{
    let categoryTotal=transactions.reduce((acc,transaction)=>{
        let {category,amount}=transaction;
        let parsedAmount=parseFloat(amount);
        if(parsedAmount<0){
            if(acc[category]){
                acc[category]+=parsedAmount;
            }
            else{
                acc[category]=parsedAmount;
            }
        }
        return acc;
    },{});
    let labels=Object.keys(categoryTotal);
    let data=Object.values(categoryTotal);

    const pieChartData={
   
        labels:labels,
        datasets:[
            {
                label:"Money spent",
                data:data,
                backgroundColor:["lightgreen","lightblue","lightpink"],
                hoverOffset:4,
            }
        ]
    }

    const options={
        plugins: {
            legend: {
                display: false
            },
        }
    };
    return <Pie options={options} data={pieChartData}/>;
}