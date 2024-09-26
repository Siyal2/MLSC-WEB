import React from 'react'

function About() {
  return (
    <>
      <div className='mt-10 w-full h-full flex justify-between align-center p-20'>
        <img 
          src="https://cdn.dribbble.com/users/1350622/screenshots/4408287/8.gif" 
          alt="About Image"
          className='w-2/6 h-auto'
        />
        <div className='w-3/5'>
          <h1 className='text-4xl font-bold text-center'>Who we are ?</h1>
          <p className='text-lg text-gray-600 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima accusamus iure quod harum dolores ut maiores tempore doloribus explicabo architecto necessitatibus assumenda natus cum eos commodi, numquam amet eum nemo. Veniam fuga nostrum culpa, quia blanditiis rerum quod magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quod voluptatibus eum rerum veritatis animi est laboriosam necessitatibus magnam autem alias quaerat debitis eos sit ex nobis nemo, explicabo ab illum dignissimos? Quo ullam aspernatur dolor? Aut nihil neque exercitationem?</p>
          <p className='text-lg text-gray-600 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque ex distinctio voluptatum iste nemo non repudiandae excepturi ipsa dolorem consequuntur soluta, dicta, unde laudantium, a autem ratione? Vitae quas iste possimus unde voluptas voluptatibus obcaecati, dolorum aut praesentium officia soluta hic provident nemo? Eaque quam explicabo debitis quos blanditiis.</p>
        </div>
      </div>
    </>
  )
}

export default About
