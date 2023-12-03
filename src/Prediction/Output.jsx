import React from 'react'

const Output = ({salary}) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-gray-900'>
      <p className='text-purple-500 text-7xl font-bold text-center '>Your salary is in the range {salary}</p>
    </div>
  )
}

export default Output
