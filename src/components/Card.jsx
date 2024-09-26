import React from 'react'

function Card({path ,name , position}) {
  return (
    <>
      <div className='w-1/4 h-auto bg-blue-400 flex flex-col justify-center items-center p-4 rounded-lg drop-shadow-lg'>
        <img 
         src={path} 
         alt="siyal jpg" 
         className='w-4/5 h-auto rounded-full'
        />
        <h2 className='text-2xl font-bold text-center mt-3'>{position}</h2>
        <p className='text-lg text-center font-medium mt-2'>{name}</p>

      </div>
    </>
  )
}

export default Card
