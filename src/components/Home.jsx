import React from 'react'
import About from './About'
import Event from './Event'
import {Link , NavLink} from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='w-full h-full flex flex-col items-center justify-center p-5'>
      <img 
        src="/Images/MITA_logo.jpg" 
        alt="MLSC LOGO" 
        className='w-3/12 h-auto mb-4 rounded-lg drop-shadow-lg'
      />
      <h1 className='text-4xl font-bold'>Learn Collaborate Build</h1>
      <p className='w-9/12 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quidem quibusdam numquam a reiciendis fuga quasi, assumenda porro dicta laboriosam sunt sit, sint placeat quae? Numquam, optio rem! Laboriosam, asperiores.</p>

      <ul className='flex justify-center align-center gap-10 mt-10'>
        <li className='text-3xl'>
          <Link to='https://www.instagram.com/mlsc.mit/'>
          <ion-icon name="logo-instagram"></ion-icon>
          </Link>
        </li>
        <li className='text-3xl'>
          <Link to='https://www.instagram.com/mlsc.mit/'>
          <ion-icon name="logo-github"></ion-icon>
          </Link>
        </li>
        <li className='text-3xl'>
          <Link to='https://www.linkedin.com/company/mlsc-mit/mycompany/'>
          <ion-icon name="logo-linkedin"></ion-icon>
          </Link>
        </li>
      </ul>
    </div>
    <About />
    <Event />
    </>
  )
}

export default Home
