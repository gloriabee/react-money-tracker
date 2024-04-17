import React from 'react'
import {BarChart} from '../components/Bar';

export default function budgetStats({filteredTransactions}) {
  return (
    <div className='md:w-1/2 lg:mr-5 md:mr-5 mb-4 md:mb-0'>
      <h1 className="text-2xl text-white font-bold">Budget Statistics</h1>
      <div className='bg-cardBg md:max-w-[500px] mt-4'>
        <BarChart filteredTransactions={filteredTransactions}/>
      </div>
    </div>
   
  )
}
