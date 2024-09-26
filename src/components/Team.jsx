import React, { useState } from 'react'
import Card from './Card'

function Team() {

  const [toggleState , setToggleState] = useState(1)

  const toggleTab = (index) => {
    console.log(index)
    setToggleState(index)
  }

  return (
    <>
      <div className='w-full h-auto flex flex-col justify-center items-center p-5 bg-gray-200'>
        <h1 className='text-4xl font-bold mt-5 mb-5'>Meet Our team</h1>
        <div className='flex justify-between align-center w-1/2'>
          <button
           onClick={() => toggleTab(1)}
           className={toggleState === 1?"text-red-500 bg-gray-300 px-4 py-2 rounded-xl":"text-black"} >Core</button>
          <button 
           onClick={() => toggleTab(2)}
           className={toggleState === 2?"text-red-500  bg-gray-300 px-4 py-2 rounded-xl":"text-black"}>Technical</button>
          <button 
           onClick={() => toggleTab(3)}
           className={toggleState === 3?"text-red-500  bg-gray-300 px-4 py-2 rounded-xl":"text-black"}>Event and Operation</button>
          <button
           onClick={() => toggleTab(4)} 
           className={toggleState === 4?"text-red-500  bg-gray-300 px-4 py-2 rounded-xl":"text-black"}>Marketing</button>
          <button 
           onClick={() => toggleTab(5)}
           className={toggleState === 5?"text-red-500  bg-gray-300 px-4 py-2 rounded-xl":"text-black"}>Design</button>
        </div>

        <div 
         className={toggleState === 1?'w-full h-auto flex flex-wrap justify-center align-center gap-4 p-10':'hidden'}>
          <Card path="/Images/siyal.JPG" position="Beta MLSA" name="Siyal Dhande"/>
          <Card path="/Images/niranjan.jpg" position="Co-Lead" name="Niranjan Gaikawad"/>
          <Card path="/Images/kunal.jpg" position="Technical Lead" name="Kunal Khachane"/>
          <Card path="/Images/shravani.JPG" position="Event & Operation Lead" name="shravani patil"/>
          <Card path="/Images/om.jpg" position="Marketin & PR Lead" name="Om Patil"/>
          <Card path="/Images/vivek.jpg" position="Social media & content Lead" name="Vivek Jadhav"/>
          <Card path="/Images/rutuja.JPG" position="Design Lead" name="Rutuja Makude"/>
        </div>

        <div className={toggleState === 2?'w-full h-auto flex flex-wrap justify-center align-center gap-4 p-10':'hidden'}>
          <h1 className='w-full text-center text-3xl font-bold'>Technical Team</h1>
          <Card path="/Images/kunal.jpg" position="Technical Lead" name="Kunal Khachane"/>
          <Card path="/Images/sharad.jpg" position="Technical Member" name="Sharad Bhadait"/>
          <Card path="/Images/kshitij.jpg" position="Technical Member" name="Kshitij Dasare"/>
          <Card path="/Images/ishan.png" position="Technical Member" name="Ishan Deshpande"/>
        </div>

        <div className={toggleState === 3?'w-full h-auto flex flex-wrap justify-center align-center gap-4 p-10':'hidden'}>
          <h1 className='w-full text-center text-3xl font-bold'>Event and Operation Team</h1>
          <Card path="/Images/shravani.JPG" position="Event & Operation Lead" name="Shravani Patil"/>
          <Card path="/Images/amar.jpg" position="Event & Operation Member" name="Amar Shinde"/>
          <Card path="/Images/anushka.jpg" position="Event & Operation Member" name="Anushka Khairnar"/>
          <Card path="/Images/krutika.jpg" position="Event & Operation Member" name="Krutika Shitole"/>
        </div>

        <div className={toggleState === 4?'w-full h-auto flex flex-wrap justify-center align-center gap-4 p-10':'hidden'}>
          <h1 className='w-full text-center text-3xl font-bold'>Marketing and PR Team</h1>
          <Card path="/Images/om.jpg" position="Marketing & PR Lead" name="Om Patil"/>
          <Card path="/Images/gargi.jpg" position="Marketing & PR Member" name="Gargi Gupta"/>
          <Card path="/Images/sakshi.jpg" position="Marketing & PR Member" name="Sakshi Karpe"/>
        </div>

        <div className={toggleState === 5?'w-full h-auto flex flex-wrap justify-center align-center gap-4 p-10':'hidden'}>
          <h1 className='w-full text-center text-3xl font-bold'>Design Team</h1>
          <Card path="/Images/rutuja.JPG" position="Design Lead" name="Rutuja Makude"/>
          <Card path="/Images/mrunal.jpg" position="Design member" name="Mrunal Kulkarni"/>
        </div>
      </div>
    </>
  )
}

export default Team
