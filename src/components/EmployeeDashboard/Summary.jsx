import React from 'react'
import { FaUser } from 'react-icons/fa'

const Summary = () => {
  return (
    <div className='p-6'>
      <div className='rounded flex bg-white'>
        <div className={`text-3xl flex justify-center items-center bg-electric-blue text-white px-4`}>
          <FaUser/>
        </div>
        <div className='pl-4 py-1'>
          <p className='text-lg font-semibold'>Welcome to CheckSheet</p>
          <p className='text-xl font-bold'>Employee Dashboard</p>
        </div>
      </div>
    </div>
  )
}

export default Summary