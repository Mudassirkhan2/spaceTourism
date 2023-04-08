import React from 'react'
import { useState } from "react"

const Technology = ({data}) => {
  const [value, setValue] = useState(0)
  const {name,description,images}=data[value]
  return (
    <div className='bg-TechnologyMobile lg:bg-TechnologyDesktop bg-center bg-no-repeat bg-cover h-screen ' >
      <section className='text-center h-[80vh] lg:p-20'>
          <h3 className='uppercase pt-24 font-BarlowCondensed tracking-widest lg:text-start lg:text-4xl mb-8'>
             <span className='text-gray-500 pr-2'>03</span> SPACE LAUNCH 101
           </h3>
      
      {
        <div className='flex flex-col-reverse justify-center lg:flex-row'>
            <article className='flex flex-col lg:flex-row p-4 space-y-4 lg:w-1/2 lg:text-start lg:gap-10'>

              <div className='lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-10'>
                {
                  data.map((persons,index)=> <button key={index} onClick={()=>setValue(index)} className={` font-Bellefair h-10 w-10  lg:w-20 lg:h-20 mx-2  rounded-full cursor-pointer border-[1px] border-[#D0D6F9]  ${index===value && "bg-white text-black"}`}>
                    {index+1}
                  </button>)
                }

              </div>
              <div className='lg:flex lg:flex-col lg:justify-center '>
                    <h4 className='uppercase font-Bellefair text-gray-400 lg:text-3xl  lg:pt-16'>THE TERMINOLOGY…</h4>
                    <h2 className='text-2xl tracking-wide mx-2 uppercase font-Bellefair lg:text-6xl'>{name}</h2>
                    <p className='text-[#D0D6F9] font-Barlow w-11/12 m-auto lg:m-0 lg:text-xl  lg:pt-6'>{description}</p>
                </div>
            </article>

            <article className='lg:w-1/2'>
              <img src={images.portrait} alt={data[value].name} className='w-2/3  m-auto pt-4 border-b border-[#D0D6F9] h-full' />
            </article>
    </div>
        
      }
      
      </section>
    </div>
  )
}

export default Technology
