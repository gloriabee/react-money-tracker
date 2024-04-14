import React from 'react'

export default function History() {
  return (
    <div className="w-1/2">
      <h1 className="text-2xl text-white font-bold">History</h1>

      <ul className="mt-4 item">
        <li className='bg-cardBg p-4 mb-3 flex justify-between items-center border-r-4 border-r-red-400 w-full'>
         <div className='w-1/3'>
          <p className='text-md text-white font-bold'>Bus Ticket</p>
          <p className='text-sm text-white'>Transportation</p>
         </div>
          <p className='text-sm text-white w-1/3 text-right'>4/12/2024</p>
          <p className='text-sm text-white w-1/3 text-right'>$200</p>
        </li>


        <li className='bg-cardBg p-4 mb-3 flex justify-between items-center border-r-4 border-r-red-400 w-full'>
         <div className='w-1/3'>
          <p className='text-md text-white font-bold'>Bus Ticket</p>
          <p className='text-sm text-white'>Transportation</p>
         </div>
          <p className='text-sm text-white w-1/3 text-right'>4/12/2024</p>
          <p className='text-sm text-white w-1/3 text-right'>$200</p>
        </li>

        <li className='bg-cardBg p-4 mb-3 flex justify-between items-center border-r-4 border-r-green-400 w-full'>
         <div className='w-1/3'>
          <p className='text-md text-white font-bold'>Bus Ticket</p>
          <p className='text-sm text-white'>Transportation</p>
         </div>
          <p className='text-sm text-white w-1/3 text-right'>4/12/2024</p>
          <p className='text-sm text-white w-1/3 text-right'>$200</p>
        </li>
      </ul>
    </div>
    
  )
}
