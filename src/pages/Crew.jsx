import React from 'react'
import { useState } from "react"


const Crew = ({data}) => {
  const [value, setValue] = useState(0)
  const {name,bio,images,role}=data[value]
  return (
    <div className='bg-CrewMobile md:bg-CrewTablet lg:bg-CrewDesktop bg-center bg-no-repeat bg-cover h-screen ' >
      <section className='text-center h-[80vh] lg:p-20'>
          <h3 className='uppercase pt-24 font-BarlowCondensed tracking-widest lg:text-start lg:text-4xl mb-8'>
             <span className='text-gray-500 pr-2'>02</span> Meet your crew
           </h3>
      
      {
        <div className='flex flex-col-reverse justify-center lg:flex-row'>
         
    
        <article className='p-4 space-y-4 lg:w-1/3 lg:text-start'>
            {
              data.map((persons,index)=> <button key={index} onClick={()=>setValue(index)} className={` pb-2  mx-2   `}>
                <div className={`p-1 rounded-full w-1 h-1 lg:w-2 lg:h-2 lg:p-2 bg-gray-400 cursor-pointer hover:bg-red-400 ${index===value && "bg-red-400 "}`}></div>
              </button>)
            }
              <h4 className='uppercase font-Bellefair text-gray-400 lg:text-4xl  lg:pt-16'>{role}</h4>
              <h2 className='text-2xl tracking-wide mx-2 uppercase font-Bellefair lg:text-6xl'>{name}</h2>
              <p className='text-[#D0D6F9] font-Barlow w-11/12 m-auto lg:m-0 lg:text-xl  lg:pt-6'>{bio}</p>
          </article>

          <article className='lg:w-1/2'>
            <img src={images.png} alt={data[value].name} className='w-1/2  m-auto pt-4 border-b border-[#D0D6F9]' />
          </article>
    </div>
        
      }
      
      </section>
    </div>
  )
}

export default Crew
