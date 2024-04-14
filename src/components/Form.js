import React from 'react'

export default function Form() {
  return (
   <div className='w-1/2'>
     <h1 className="text-2xl text-white mb-3 font-bold">Add transaction</h1>
      <form className='mt-4'>
       <div className="max-w-96 mb-2">
        <label className='text-white'>Title</label>
          <input type="text" className='p-2 bg-cardBg w-full focus:outline-none text-white' placeholder='eg-smoothie'/>
        </div>

        <div className="max-w-96 mb-2">
        <label className='text-white'>Date</label>
          <input type="text" className='p-2 bg-cardBg w-full focus:outline-none text-white' placeholder='enter the date'/>
        </div>

        <div className="max-w-96 mb-2">
        <label className='text-white'>Category</label>
          <input type="text" className='p-2 bg-cardBg w-full focus:outline-none text-white' placeholder='choose the category'/>
        </div>

        <div className="max-w-96 mb-2">
        <label className='text-white'>Amount</label>
          <input type="text" className='p-2 bg-cardBg w-full focus:outline-none text-white' placeholder='Eg +2000 for income and -2000 for expenses'/>
        </div>

      <div className="max-w-96 mb-2">
      <button className='bg-btnGreen text-center p-2 text-white w-full'>Add Transaction</button>
      </div>
       
       
      </form>
   </div>
  )
}
