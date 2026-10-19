import React from 'react'
import Portal from './Portal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const WorkDisc = ({flag,setFlag}) => {

  return (
    <Portal flag={flag} >
          <div className="relative bg-black h-fit w-1/2 p-5 flex flex-col rounded-2xl">
                <span onClick={()=>setFlag(!flag)} className='absolute right-5 top-4 text-2xl cursor-pointer hover:opacity-80'>
                    <FontAwesomeIcon icon={faX} />
                </span>
               <h1 className='text-6xl pb-10'>Heading</h1>
              
               <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorum, ipsam nulla quos incidunt illum, labore earum quo nisi hic iure vel quis at accusamus repudiandae itaque reprehenderit laborum quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorum, ipsam nulla quos incidunt illum, labore earum quo nisi hic iure vel quis at accusamus repudiandae itaque reprehenderit laborum quasi.
               </p>

               

               <div className="flex flex-col pt-14 space-y-3">
                   <span className='flex items-center space-x-3'>
                       <span>GitHub :</span>
                       <span> Link</span>
                   </span>
               
                  <span className='flex items-center space-x-3'>
                       <span>Live :</span>
                       <span> Link</span>
                   </span>
               </div>

          </div>
    </Portal>
  )
}

export default WorkDisc