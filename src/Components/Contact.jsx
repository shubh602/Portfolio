import { faGithub, faLinkedin, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import { faFileMedicalAlt, faMailBulk, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons/faX'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='min-h-[550px] px-4 md:px-10 pt-24 md:pt-28 py-8 flex flex-col md:flex-row'>
        
        <div className="w-6/12 flex flex-col justify-between">
               <span className='font-extrabold text-8xl'>Let's Connect Through</span>
               
                <span className='flex items-center space-x-4 text-2xl'>
                            <FontAwesomeIcon className='border-2 rounded-full py-1 px-0.5 hover:text-blue-100' icon={faEnvelope} />
                            <FontAwesomeIcon className='border-2 rounded-full py-1 px-0.5 hover:text-blue-100' icon={faXTwitter} />
                            <FontAwesomeIcon className='border-2 rounded-full py-1 px-0.5 hover:text-blue-100' icon={faLinkedin} />
                            <FontAwesomeIcon className='border-2 rounded-full py-1 px-0.5 hover:text-blue-100' icon={faGithub} />
                </span>
        </div>

        <div className="w-6/12 pt-14 flex flex-col justify-center items-end">
             
                <div className="flex flex-col space-y-4 text-black">
                    <input type="text" placeholder='Please Enter Your Name' className='bg-white h-16 w-[500px] rounded-xl text-xl p-3' name="" id="" />
                    
                    <textarea name="" placeholder='Enter Your Message.....' className='bg-white h-64 w-[500px] rounded-2xl text-xl p-3' id=""></textarea>
                    <button className='mt-6 px-3 py-2 rounded-lg text-2xl cursor-pointer w-fit font-semibold text-white bg-blue-800 cursor-pointer hover:opacity-90'>Submit</button>
                </div>

                
        </div>

    </div>
  )
}

export default Contact