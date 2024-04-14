import React from 'react'
import {BarChart} from '../components/Bar';

export default function budgetStats() {
  return (
    <div className='w-1/2'>
      <h1 className="text-2xl text-white font-bold">Budget Statistics</h1>
      <div className='bg-cardBg w-[500px] mt-4'>
        <BarChart/>
      </div>
    </div>
   
  )
}
