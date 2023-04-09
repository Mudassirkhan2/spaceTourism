import React from 'react'
import { useState } from "react"

const Destination = ({data}) => {
  const [value, setValue] = useState(0)
  const {name,description,images,distance,travel}=data[value]
  return (
    <div className='bg-DestinationMobile md:bg-DestinationTablet lg:bg-DestinationDesktop bg-center bg-no-repeat bg-cover h-[140vh] md:h-screen ' >
      <section className='text-center h-[80vh] lg:p-20'>
          <h3 className='uppercase pt-24 font-BarlowCondensed tracking-widest lg:text-start lg:text-4xl mb-8'>
             <span className='text-gray-500 pr-2'>01</span> Pick your destination
           </h3>
      
      {
        <div className='flex flex-col lg:flex-row'>
            <article className='lg:w-1/2'>
               <img src={images.png} alt={data[value].name} className='w-1/2  m-auto pt-4  animate-spin-slow' />
            </article>
       
           <article className='p-4 space-y-4 lg:w-1/3 lg:text-start'>
              {
                data.map((planets,index)=> <button key={index} onClick={()=>setValue(index)} className={`uppercase text-xl pb-2  mx-2 font-BarlowCondensed hover:border-b cursor-pointer text-[#D0D6F9] ${index===value && "border-b text-white"}`}>{planets.name}</button>)
              }
                <h2 className='text-5xl tracking-wide mx-2 uppercase font-Bellefair lg:text-9xl'>{name}</h2>
                <p className='text-[#D0D6F9] font-Barlow w-11/12 m-auto lg:m-0'>{description}</p>

                <hr  className='text-[#979797] w-11/12 m-auto lg:m-0  border-t mt-4'/>

                <div className='flex flex-col items-center  lg:flex-row lg:space-x-20 lg:mt-8'>
                  <div>
                    <p className='uppercase text-gray-400 font-BarlowCondensed' >AVG. DISTANCE</p>
                    <p className='uppercase text-4xl font-Bellefair'>{distance}</p>
                  </div>
                  <div>
                    <p className='uppercase text-gray-400 font-BarlowCondensed'>Est. travel time</p>
                    <p className='uppercase text-4xl font-Bellefair'>{travel}</p>
                  </div>
                </div>
            </article>
        </div>
      }
      
      </section>
    </div>
  )
}

export default Destination
