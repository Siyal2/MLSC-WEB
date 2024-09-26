import React from 'react'

function contact() {
  return (
    <>
     <div className='w-full h-auto flex justify-center items-center mt-10'>
        <div className='w-3/5 h-auto p-5 rounded-xl bg-gray-100 drop-shadow-lg'>
          <h1 className='text-3xl text-center font-bold mb-5 '>Contact Us</h1>
          <form action="">
            <input 
             type="text" 
             placeholder='Enter your name'
             className='w-full bg-gray-500 px-5 py-2 text-lg text-white outline-none border-none rounded-lg drop-shadow-lg mb-5'
             />
             <input 
             type="text" 
             placeholder='Enter your Email'
             className='w-full bg-gray-500 px-5 py-2 text-lg text-white outline-none border-none rounded-lg drop-shadow-lg mb-5'
             />
             <input 
             type="text" 
             placeholder='Enter your phone no.'
             className='w-full bg-gray-500 px-5 py-2 text-lg text-white outline-none border-none rounded-lg drop-shadow-lg mb-5'
             />
             <textarea
              placeholder='Enter your message' 
              className='w-full bg-gray-500 px-5 py-2 text-lg text-white outline-none border-none rounded-lg drop-shadow-lg mb-5'
              rows={5}
             ></textarea>
             <button className='text-xl bg-blue-500 px-5 py-3 rounded-lg drop-shadow-xl hover:bg-blue-700 hover:text-white'>Submit</button>
          </form>
        </div>
     </div>
    </>
  )
}

export default contact
