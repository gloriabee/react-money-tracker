import './App.css';
import Overview from './components/Overview'
import BudgetStats from './components/BudgetStats'
import CategoriesStats from './components/CategoriesStats';
import Form from './components/Form';
import History from './components/History';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';


function App() {
  let [transactions,setTransaction]=useState(
    JSON.parse(localStorage.getItem('transactions')) || []
  );

  useEffect(()=>{
   localStorage.setItem('transactions',JSON.stringify(transactions))
  },[transactions]);

  let addTransaction=(transaction)=>{
    
    setTransaction([...transactions,transaction])
  }


  let deleteTransaction=(transactionId)=>{
    //server
   const updatedTransactions=transactions.filter(t=>t.id !== transactionId);
   setTransaction(updatedTransactions);
  }
  
  return (
    <div className="app-container">
      <div className="container mx-auto px-4">
      <h1 className="lg:text-3xl sm:text-lg font-bold text-center mt-4 text-white">
        Money Tracker App
      </h1>
      <Overview transactions={transactions}/>
      <div className="stats-container mt-12 flex lg:justify-between  justify-center flex-wrap md:flex-nowrap">
       <BudgetStats transactions={transactions}/>
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
