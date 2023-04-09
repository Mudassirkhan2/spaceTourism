import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/shared/logo.svg";
import {GiCrossedBones} from "react-icons/gi"
import {RiMenuFoldLine} from "react-icons/ri"
const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(true)
 
  const handleToggle = ()=>{
    setShowMediaIcons(!showMediaIcons)
    
  }
  const handleLinkClick = () => {
    setShowMediaIcons(true)
  };

  return (
    <>
      <header className='flex justify-between items-center w-[100%] lg:mt-6 p-8  absolute top-0 left-0 font-BarlowCondensed '>
        <div>
           <Link >
             <img src={logo} alt="space-tourism" className='w-12 h-12 max-w-none' />
           </Link>
        </div>
          {
            showMediaIcons ? <RiMenuFoldLine className=' text-2xl block lg:hidden' onClick={handleToggle}/> : " "
          }

          <div className={`space-x-7 bg-white bg-opacity-5 text-xl  flex flex-col lg:items-center justify-center gap-5 absolute lg:relative lg:flex lg:p-4 lg:rounded-md top-0 right-0 w-9/12 h-screen backdrop-blur z-40 lg:flex-row lg:h-fit lg:w-1/2   ${showMediaIcons ? "hidden" :"block"}`}>
            <GiCrossedBones className='absolute right-4 top-10 Cross block lg:hidden' onClick={()=>handleToggle()}/>
            <Link  to="/spaceTourism"  className='tracking-wider ' onClick={handleLinkClick}><span className='pr-2 font-bold'>00</span>HOME</Link>
            <Link to="/spaceTourism/destination" className='tracking-wider'  onClick={handleLinkClick}><span className='pr-2 font-bold'  onClick={handleLinkClick}>01</span>DESTINATION</Link>
            <Link to="/spaceTourism/crew" className='tracking-wider'  onClick={handleLinkClick}><span className='pr-2 font-bold'>02</span >CREW</Link>
            <Link to="/spaceTourism/technology" className='tracking-wider'  onClick={handleLinkClick}><span className='pr-2 font-bold'>03</span>TECHNOLOGY</Link>
          </div>
      </header>
    </>
  )
}

export default NavBar
