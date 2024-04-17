import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const BarChart=({filteredTransactions})=>{
    const today=new Date();
    const ftrTransition= filteredTransactions.filter(t=>{
        const transactionDate=new Date(t.date);
        return transactionDate<=today;
    })
   const groupedTransactions=ftrTransition.reduce((acc,transaction)=>{
    const date=transaction.date;
    const amount=parseFloat(transaction.amount);

    acc[date]=acc[date] || {income:0,expenses:0};
    if(amount>0){
        acc[date].income+=amount;
    }else if(amount<0){
        acc[date].expenses-=amount;
    }
    return acc;
   },{});

   const labels=Object.keys(groupedTransactions).sort((a,b)=>new Date(a)-new Date(b));
   const income=labels.map(date => groupedTransactions[date].income);
   const expenses=labels.map(date => groupedTransactions[date].expenses);
    const barChartData={
        labels:labels,
        datasets:[
            {
                label: "Income",
                data:income,
                backgroundColor:["#4BDB6B"],
                borderWidth:1,
                borderRadius:20
            },
            {
                label: "Expenses",
                data:expenses,
                backgroundColor:["#FF6C6C"],
                borderWidth:1,
                borderRadius:20
            }
        ]
    }

    const options={}
    return <Bar options={options} data={barChartData}/>
}