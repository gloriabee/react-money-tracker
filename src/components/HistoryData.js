import React from 'react'

export default function HistoryData({transaction,deleteTransaction}) {
  return (
    <li className={`relative bg-cardBg p-4 mb-3 flex justify-between items-center border-r-4 ${transaction.amount<0 ? "border-r-red-400":"border-r-green-400"}`}>
        <div className='w-1/3'>
        <p className='text-md text-white font-bold'>{transaction.title}</p>
        <p className='text-sm text-white'>{transaction.category}</p>
        </div>
        <p className='text-sm text-white w-1/3 text-right'>{transaction.date}</p>
        <p className='text-sm text-white w-1/3 text-right'>{transaction.amount}</p>
        <button className='delete-btn text-red-400 bg-white p-4 absolute right-0 opacity-0' onClick={()=>deleteTransaction(transaction.id)}>X</button>
    </li>
  )
}