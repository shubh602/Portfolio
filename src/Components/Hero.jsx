import { faListCheck, faTools } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import photo2 from "../assets/images/Photo2.png";
import { faJs, faJsSquare, faReact, faTailwindCss } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <div className='px-4 md:px-10 pt-24 md:pt-44 py-8 flex flex-col space-y-18 md:flex-row items-center'>
        
        <div className="w-full md:w-8/12 flex flex-col items-start">
              <span className='text-xl font-bold pb-7'>Hi, I'm Shubham </span>
              <span className='text-4xl font-extrabold text-blue-900 pb-5 tracking-[2px]'> FRONTEND DEVLOPER </span>
              <span className='w-full md:w-8/12 pb-8 leading-6 tracking-wide'>
              I build responsive, user-friendly web applications using JavaScript, React.js, Redux Toolkit, and Tailwind CSS, with a strong focus on problem solving and clean, maintainable code.
              </span>
              <span className='flex items-center space-x-4 text-2xl'>
                   <FontAwesomeIcon className='text-yellow-500' icon={faJs} />
                   <FontAwesomeIcon className='text-blue-500' icon={faReact} />
                   <FontAwesomeIcon className='text-blue-500' icon={faTailwindCss} />
                   <img className='h-6'
                   src="https://cdn.iconscout.com/icon/premium/png-256-thumb/redux-action-icon-svg-download-png-9632879.png?f=webp&w=128"  alt="" />

                </span>


             <div className="flex items-center space-x-10 pt-12 md:pt-24">
                
               <button className='bg-blue-800 text-white font-bold px-4 py-2 rounded-lg cursor-pointer'>
                   <FontAwesomeIcon icon={faListCheck} /> Work
               </button>

                <button className='bg-white text-blue-800 font-bold px-4 py-2 rounded-lg cursor-pointer'>
                   <FontAwesomeIcon icon={faTools} />  Skills

                </button>
                
                

             </div>
            
        </div>

        

        <div className="w-full md:w-4/12 flex justify-start items-center">
              <img src={photo2} className='h-[450px] rounded-full' alt="" />
        </div>
        


    </div>
  )
}

export default Hero