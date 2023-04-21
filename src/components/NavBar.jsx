import React, { useState } from 'react'
import { NavLink ,useLocation} from 'react-router-dom'
import logo from "../assets/shared/logo.svg";
import {GiCrossedBones} from "react-icons/gi"
import {RiMenuFoldLine} from "react-icons/ri"

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(true)
  const location = useLocation();
  function pathMathRoute(route){
    if(route ===location.pathname){
        return true
    }
}
  console.log(location.pathname)
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
           <NavLink >
             <img src={logo} alt="space-tourism" className='w-12 h-12 max-w-none' />
           </NavLink>
        </div>
          {
            showMediaIcons ? <RiMenuFoldLine className='block text-2xl lg:hidden animate-bounce' onClick={handleToggle}/> : " "
          }

          <div className={`space-x-7 bg-white  bg-opacity-5 text-xl  flex flex-col lg:items-center justify-center gap-5 absolute  lg:relative  lg:flex lg:p-4 lg:rounded-md top-0 right-0 w-9/12 h-screen backdrop-blur-lg z-40 lg:flex-row lg:h-fit lg:w-1/2   ${showMediaIcons ? "hidden" :"block"}`}>
            
            <GiCrossedBones className='absolute block right-4 top-10 Cross lg:hidden' onClick={()=>handleToggle()}/>
            <NavLink   to="/spaceTourism"  className={`tracking-wider border-b-4 border-b-transparent ${pathMathRoute("/spaceTourism") && "text-gray-700 font-bold border-b-gray-600"}`}  onClick={handleLinkClick}><span className='pr-2 font-bold'>00</span>HOME</NavLink>
            <NavLink to="/spaceTourism/destination" className={`tracking-wider border-b-4 border-b-transparent ${pathMathRoute("/spaceTourism/destination") && "text-gray-700 font-bold border-b-gray-600"}`}  onClick={handleLinkClick}><span className='pr-2 font-bold'  onClick={handleLinkClick}>01</span>DESTINATION</NavLink>
            <NavLink to="/spaceTourism/crew" className={`tracking-wider border-b-4 border-b-transparent ${pathMathRoute("/spaceTourism/crew") && "text-gray-700 font-bold border-b-gray-600"}`} onClick={handleLinkClick}><span className='pr-2 font-bold'>02</span >CREW</NavLink>
            <NavLink to="/spaceTourism/technology" className={`tracking-wider border-b-4 border-b-transparent ${pathMathRoute("/spaceTourism/technology") && "text-gray-700 font-bold border-b-gray-600"}`}  onClick={handleLinkClick}><span className='pr-2 font-bold'>03</span>TECHNOLOGY</NavLink>

          </div>
      </header>
    </>
  )
}

export default NavBar
