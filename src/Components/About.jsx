import { faLeetcode } from '@fortawesome/free-brands-svg-icons'
import { faCircleArrowLeft, faCircleArrowRight, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <div className='px-4 md:px-10 pb-10 pt-28 flex flex-col-reverse lg:flex-row space-y-14'>
       
        <div className="w-full lg:w-6/12 h-[550px] rounded-3xl font-bold flex pt-2 px-5 overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-gray-900 backdrop-blur-3xl text-xs">
                   
                       <div className="w-6/12 border-blue-700 border-r-2 h-[800px] flex flex-col items-end">

                                     <div className="pt-10 relative z-10 -mr-2.5 flex flex-row justify-end items-center space-x-3">
                                            <span className="text-center hover:text-shadow-2xs text-shadow-blue-400">12<sup>th</sup> kendriya vidyalaya sangathan (2020-2021)</span>
                                            <span className="font-bold"><FontAwesomeIcon icon={faCircleArrowLeft} /></span>
                                     </div>

                                      <div className="pt-48 relative z-10 -mr-2.5 flex flex-row justify-end items-center space-x-3">
                                            <span className="text-center hover:text-shadow-2xs text-shadow-blue-400">O Level </span>
                                            <span className="font-bold"><FontAwesomeIcon icon={faCircleArrowLeft} /></span>
                                     </div>
                                     
                                      <div className="pt-20 relative z-10 -mr-2.5 flex flex-row justify-end items-center space-x-3">
                                            <span className="text-center hover:text-shadow-2xs text-shadow-blue-400">FullStack Devlopment <br /> [ html ,css ,js ,jquery ,Bootstrap ,php ,mysql ]</span>
                                            <span className="font-bold"><FontAwesomeIcon icon={faCircleArrowLeft} /></span>
                                     </div>

                                      <div className="pt-20 relative z-10 -mr-2.5 flex flex-row justify-end items-center space-x-3">
                                            <span className="text-center hover:text-shadow-2xs text-shadow-blue-400">Work At StartUp WebSkyNet (approx. 4 Months) </span>
                                            <span className="font-bold"><FontAwesomeIcon icon={faCircleArrowLeft} /></span>
                                     </div>

                                      <div className="pt-10 relative z-10 -mr-2.5 flex flex-row justify-end items-center space-x-3">
                                            <span className="text-center hover:text-shadow-2xs text-shadow-blue-400">Switching From fullstack To Js & Front-End Devlopment </span>
                                            <span className="font-bold"><FontAwesomeIcon icon={faCircleArrowLeft} /></span>
                                     </div>

                       </div>

                       <div className="w-6/12 border-blue-700 border-l-2 h-[800px]">

                                   <div className="pt-32 relative z-10 -ml-2 flex flex-row justify-start items-center space-x-3">
                                            <span className="font-bold"><FontAwesomeIcon icon={faCircleArrowRight} /></span>
                                            <span className="text-center hover:text-shadow-2xs text-shadow-blue-400">B.Com   PRSU State University</span>
                                   </div>

                                    <div className="pt-64 relative z-10 -ml-2 flex flex-row justify-start items-center space-x-5">
                                            <span className="font-bold"><FontAwesomeIcon icon={faCircleArrowRight} /></span>
                                            <span className="text-center hover:text-shadow-2xs text-shadow-blue-400">MCA Integral University</span>
                                     </div>  

                                     <div className="pt-64 relative z-10 -ml-2 flex flex-row justify-start items-center space-x-5">
                                            <span className="font-bold"><FontAwesomeIcon icon={faCircleArrowRight} /></span>
                                            <span className="text-center text-blue-300 font-bold">Current</span>
                                   </div>

                       </div>

        </div>

        <div className="w-full  lg:w-7/12 flex flex-col px-8 pb-20 lg:pb-0 space-y-5">
                     
                     <span className='[word-spacing:6px] leading-6 font-semibold flex flex-col space-y-4'>
                             <span className='text-7xl font-bold pb-8 text-center'>About Me</span>   

                                        <span>
                                        Hi, I'm Shubham, a Frontend Developer focused on React.js and JavaScript. <br />
                                       
                                      I enjoy turning ideas into responsive, interactive web experiences. I like solving problems, debugging applications, and understanding how things work under the hood. 
                                      </span>

                                  <span>
                                      I'm also strengthening my Data Structures & Algorithms (DSA) and problem-solving skills, with TypeScript and Next.js planned for my future learning journey.
                                  </span>

                   </span>

                   <span className='flex flex-col space-y-3 pt-44'>

                          <span title='LeetCode' className='flex flex-row space-x-4'><span> Resume  :</span> <span><FontAwesomeIcon className='text-2xl' icon={faFile} /></span></span>

                          <span title='LeetCode' className='flex flex-row space-x-4'><span> Leetcode :</span> <span><FontAwesomeIcon className='text-orange-600 text-2xl cursor-pointer' icon={faLeetcode} /></span></span>


                          {/* <span className='flex flex-row space-x-4'><span> <FontAwesomeIcon icon={} /> :</span> <span>URL</span></span> */}
                         
                   </span>
        </div>

    </div>
  )
}

export default About