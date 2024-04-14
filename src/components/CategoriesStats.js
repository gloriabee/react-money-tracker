import React from 'react'
import {PieChart} from '../components/Pie';

export default function CategoriesStats() {
  return (
    <div className="w-1/2">
      <h1 className="text-2xl text-white font-bold">Categories Statistics</h1>
      <div className='w-[300px] h-[249px] mt-4'>
        <PieChart/>
      </div>
    </div>
  )
}
