import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faListCheck, faTools } from '@fortawesome/free-solid-svg-icons'
import { faHome, faUser } from '@fortawesome/free-regular-svg-icons'
import useLinkScroll from '../utils/useLinkScroll'

const Header = () => {
  return (
    <header className='fixed z-50 px-4 md:px-10 py-3  w-full flex flex-row items-center justify-between'>
        
           <nav className='hidden md:block'>
               <span className='flex space-x-12 font-semibold'>

                <a onClick={(e)=>useLinkScroll(e,"home")}
                  className='cursor-pointer hover:text-blue-300 flex items-center space-x-2.5'>
                  <FontAwesomeIcon icon={faHome} />  
                  <span>Home</span>
                </a>

                <a onClick={(e)=>useLinkScroll(e,"about")}
                  className='cursor-pointer hover:text-blue-300 flex items-center space-x-2.5'>
                  <FontAwesomeIcon icon={faUser} />  
                  <span>About</span>
                </a>

                <a onClick={(e)=>useLinkScroll(e,"skill")}
                  className='cursor-pointer hover:text-blue-300 flex items-center space-x-2.5'>
                  <FontAwesomeIcon icon={faTools} />  
                  <span>Skills</span>
                </a>

                <a onClick={(e)=>useLinkScroll(e,"work")}
                  className='cursor-pointer hover:text-blue-300 flex items-center space-x-2.5'>
                  <FontAwesomeIcon icon={faListCheck} />  
                  <span>Project</span>
                </a>
               </span>
           </nav>

           <button className='md:hidden text-3xl'><FontAwesomeIcon icon={faBars} /></button>

           <button onClick={(e)=>useLinkScroll(e,"contact")}
            className='bg-blue-900 px-6 py-2 font-bold rounded-lg cursor-pointer hover:bg-white hover:text-blue-900 transition-all duration-400'>
                       Contact
           </button>
           
             

    </header>
  )
}

export default Header