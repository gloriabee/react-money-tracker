export const barChartData={
    labels:["Rent","Groceries","Utilities","Entertainment","Transportation"],
    datasets:[
        {
            label: "Income",
            data:[3000,2000,200],
            backgroundColor:["#4BDB6B"],
            borderWidth:1,
            borderRadius:20
        },
        {
            label: "Expenses",
            data:[1200,300,150,180,100],
            backgroundColor:["#FF6C6C"],
            borderWidth:1,
            borderRadius:20
          
        },
        
    ]
}

export const pieChartData={
    labels:["Transportation","Entertainment","Uncategorized"],
    datasets:[
        {
            label: "Money spent",
            data:[120.60,30,98],
            backgroundColor:["lightgreen","lightblue","lightpink"],
            hoverOffset:4,
        },
    ]
}