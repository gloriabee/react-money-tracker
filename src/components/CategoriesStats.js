import React from 'react'
import {PieChart} from '../components/Pie';

export default function CategoriesStats() {
  return (
    <div className="md:w-1/2">
      <h1 className="text-2xl text-white font-bold">Categories Statistics</h1>
      <div className='md:max-w-[300px] md:max-h-[249px] mt-4'>
        <PieChart/>
      </div>
    </div>
  )
}
