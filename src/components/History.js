import React from 'react'
import HistoryData from './HistoryData'

export default function History({filteredTransactions,deleteTransaction}) {
  return (
    <div className="md:w-1/2 mb-4 md:mb-0">
      <h1 className="text-2xl text-white font-bold">History</h1>

      <ul className="mt-4 item">
        {
          filteredTransactions.map(transaction => (
            <HistoryData transaction={transaction} key={transaction.id} deleteTransaction={deleteTransaction}/>
          ))
        }
      </ul>
    </div>
    
  )
}
