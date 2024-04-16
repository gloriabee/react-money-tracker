import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import '../App.css';

export default function Form({addTransaction}) {
  let handleSubmit=(e)=>{
    e.preventDefault();
    let transaction={
      id:Math.random(),
      title,
      category,
      date:date.toLocaleDateString(),
      amount
    }

    // add transaction
    addTransaction(transaction);

    // clearing all input

  }

  let handleDateChange=(selectedDate)=>{
    setDate(selectedDate);
  }


  let [title,setTitle]=useState('');
  let [amount,setAmount]=useState('');
  let [date,setDate]=useState(new Date());
  let [category,setCategory]=useState('Transportation');


  return (
   <div className='md:w-1/2 lg:mr-5 md:mr-5 mb-4 md:mb-0'>
     <h1 className="text-2xl text-white mb-3 font-bold">Add transaction</h1>
      <form className='mt-4' onSubmit={handleSubmit}>
       <div className="max-w-96 mb-2">
        <label className='text-white'>Title</label>
          <input type="text" 
          className='p-2 bg-cardBg w-full focus:outline-none text-white' 
          placeholder='eg-smoothie'
          onChange={e=> setTitle(e.target.value)}
          value={title}/>
        </div>

        <div className="max-w-96 mb-2">
        <label className='text-white'>Date</label>
          {/* <input type="text" className='p-2 bg-cardBg w-full focus:outline-none text-white' placeholder='enter the date'/> */}
          <DatePicker className='p-2 bg-cardBg w-full border-none' onChange={handleDateChange} value={date}/>
        </div>

        <div className="max-w-96 mb-2">
        <label className='text-white'>Category</label>
          {/* <input type="text" className='p-2 bg-cardBg w-full focus:outline-none text-white' placeholder='choose the category'/> */}
          <select value={category} onChange={e=> setCategory(e.target.value)} className='p-2 bg-cardBg w-full focus:outline-none text-white'>
            <option value="Transportation">Transportation</option>
            <option value="Groceries">Groceries</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <div className="max-w-96 mb-2">
        <label className='text-white'>Amount</label>
          <input type="text" 
          className='p-2 bg-cardBg w-full focus:outline-none text-white'
           placeholder='(negative - expense, positive - income)'
           onChange={e=>setAmount(e.target.value)}
           value={amount}/>
        </div>

      <div className="max-w-96 mb-2">
      <button className='bg-btnGreen text-center p-2 text-white w-full' type="submit">Add Transaction</button>
      </div>
       
       
      </form>
   </div>
  )
}
