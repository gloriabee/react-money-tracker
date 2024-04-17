import './App.css';
import Overview from './components/Overview'
import BudgetStats from './components/BudgetStats'
import CategoriesStats from './components/CategoriesStats';
import Form from './components/Form';
import History from './components/History';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';


function App() {
  const [selectMonth,setSelectedMonth]=useState(new Date().getMonth()+1);

 
  let [transactions,setTransaction]=useState(
    JSON.parse(localStorage.getItem('transactions')) || []
  );
  const filteredTransactions= transactions.filter(t=>{
    const tDate=new Date(t.date);
    return tDate.getMonth()+1===selectMonth;
  });


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
      <div className="flex items-center mb-4 justify-between">
          <h1 className="lg:text-3xl sm:text-lg font-bold text-center mt-4 text-white">
            Money Tracker App
          </h1>
          <div>
              <label className='mr-2 text-white'>Month:</label>
              <select value={selectMonth} onChange={e=>setSelectedMonth(parseInt(e.target.value))}>
                {
                  Array.from({length:12},(_,i)=>(
                    <option key={i+1} value={i+1}>{new Date(0,i).toLocaleString('default',{month:'long'})}</option>
                  ))
                }
              </select>
              </div>
      </div>
      <Overview filteredTransactions={filteredTransactions}/>
      <div className="stats-container mt-12 flex lg:justify-between  justify-center flex-wrap md:flex-nowrap">
       <BudgetStats filteredTransactions={filteredTransactions}/>
       <CategoriesStats filteredTransactions={filteredTransactions}/>
      </div>

      <div className="transactions-container mt-12 flex lg:justify-between  justify-center flex-wrap md:flex-nowrap">
        <Form addTransaction={addTransaction}/>
        <History filteredTransactions={filteredTransactions} deleteTransaction={deleteTransaction}/>
      </div>

      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
