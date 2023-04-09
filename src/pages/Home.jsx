import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className=' flex flex-col justify-center items-center bg-HomeMobile md:bg-HomeTablet lg:bg-HomeDesktop bg-center bg-no-repeat bg-cover p-6 h-screen' >
      <section className='flex flex-col lg:flex-row lg:items-center justify-around lg:justify-center h-[80vh]   m-4' >
        <article className=' text-center lg:w-1/3 lg:text-start'>
          <h4 className='font-BarlowCondensed text-2xl lg:text-4xl font-thin tracking-wider text-[#D0D6F9]'>SO, YOU WANT TO TRAVEL TO</h4>
          <h1 className='font-Bellefair text-7xl m-7 lg:text-9xl'>SPACE</h1>
          <p className='font-Barlow text-[#D0D6F9] lg:text-2xl'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </article>
        <article className=' text-center lg:w-1/2'>
          <Link to="/spaceTourism/destination"> 
            <button className='font-Bellefair bg-white text-black w-52 h-52 lg:w-72 lg:h-72 rounded-full text-2xl lg:text-4xl hover:shadow-boxshadow cursor-pointer hover:scale-110' >
              EXPLORE
            </button>
          </Link>
        </article>
      </section>
    </div>
  )
}

export default Home
