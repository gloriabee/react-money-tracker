import './App.css';
import Overview from './components/Overview'
import BudgetStats from './components/BudgetStats'
import CategoriesStats from './components/CategoriesStats';
import Form from './components/Form';
import History from './components/History';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';


function App() {
  let [transactions,setTransaction]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/transactions')
    .then(res => res.json())
    .then((transactions)=>{
      setTransaction(transactions);
    })
  },[]);

  let addTransaction=(transaction)=>{
    //server
    fetch('http://localhost:3001/transactions',{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(transaction)
    })
    //client
    setTransaction(prevState=>[...prevState,transaction]);
  }


  let deleteTransaction=(transactionId)=>{
    //server
    fetch(`http://localhost:3001/transactions/${transactionId}`,{
      method:"DELETE"
    })

    //client
    setTransaction(prevState => {
      return prevState.filter(t=>{
        return t.id !== transactionId
      });
    })
  }
  
  return (
    <div className="app-container">
      <div className="container mx-auto px-4">
      <h1 className="lg:text-3xl sm:text-lg font-bold text-center mt-4 text-white">
        Expense Tracker App
      </h1>
      <Overview transactions={transactions}/>
      <div className="stats-container mt-12 flex lg:justify-between  justify-center flex-wrap md:flex-nowrap">
       <BudgetStats/>
       <CategoriesStats transactions={transactions}/>
      </div>

      <div className="transactions-container mt-12 flex lg:justify-between  justify-center flex-wrap md:flex-nowrap">
        <Form addTransaction={addTransaction}/>
        <History transactions={transactions} deleteTransaction={deleteTransaction}/>
      </div>

      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
