import React from 'react'

export default function Overview({filteredTransactions}) {
 
  let amounts=filteredTransactions.map(t=> parseFloat(t.amount));
  let balance=amounts.reduce((acc,item)=>(acc+=item),0);
  let income=amounts
  .filter(item=>item>0)
  .reduce((acc,item)=>(acc+=item),0);

  let expenses=amounts
  .filter(item => item<0)
  .reduce((acc,item)=>(acc+=item),0);
 
  return (
   <div className=" mx-auto overview mt-4">
    

     <div className="flex items-center mb-4 justify-between">
     <h1 className="text-2xl font-bold mb-2 text-white">Monthly Overview</h1>
     </div>
     <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Balance */}
      <div className="bg-cardBg text-cardText py-2 px-9 mb-4 md:mb-0 md:mr-4">
        <h3 className="text-lg font-bold ">Balance</h3>
        <p>${balance}</p>
      </div>

      {/* Income */}
      <div className="bg-cardBg text-cardText py-2 px-9 mb-4 md:mb-0 md:mr-4">
            <h3 className="text-lg font-bold ">Income</h3>
            <p className='text-green-400'>${income}</p>
      </div> 

      {/* Expenses */}
      <div className="bg-cardBg text-cardText py-2 px-9 mb-4 md:mb-0 md:mr-4">
            <h3 className="text-lg font-bold ">Expenses</h3>
            <p className='text-red-400'>${expenses}</p>
      </div>

     </div>
   </div>
    
  )
}
