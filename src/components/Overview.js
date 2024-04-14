import React from 'react'

export default function Overview() {
  return (
   <div className=" mx-auto overview mt-4">
     <h1 className="text-2xl font-bold mb-2 text-white">Monthly Overview</h1>
     <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Balance */}
      <div className="bg-cardBg text-cardText py-2 px-9 mb-4 md:mb-0 md:mr-4">
        <h3 className="text-lg font-bold ">Balance</h3>
        <p>$ 4000</p>
      </div>

      {/* Income */}
      <div className="bg-cardBg text-cardText py-2 px-9 mb-4 md:mb-0 md:mr-4">
            <h3 className="text-lg font-bold ">Income</h3>
            <p className='text-green-400'>$ 4000</p>
      </div> 

      {/* Expenses */}
      <div className="bg-cardBg text-cardText py-2 px-9 mb-4 md:mb-0 md:mr-4">
            <h3 className="text-lg font-bold ">Expenses</h3>
            <p className='text-red-400'>$ 4000</p>
      </div>

     </div>
   </div>
    
  )
}
