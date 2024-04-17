import React from 'react'
import {PieChart} from '../components/Pie';

export default function CategoriesStats({filteredTransactions}) {
 
  return (
    <div className="md:w-1/2 mb-4 md:mb-0">

      <h1 className="text-2xl text-white font-bold">Expenses Categories</h1>
    
      <div className='md:max-w-[300px] md:max-h-[249px] mt-4'>
        <PieChart filteredTransactions={filteredTransactions}/>
      </div>
    </div>
  )
}
