import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MovieHub from "../assets/images/MovieHub.png"
import Yummy from "../assets/images/Yummy.png"
import { faJs, faReact, faTailwindCss } from "@fortawesome/free-brands-svg-icons"
import redux from '../assets/images/redux.webp'
import firebase from '../assets/images/firebase.webp'
import WorkDisc from "./WorkDisc"
import { useState } from "react"

const Work = () => {
   const [flag,setFlag]=useState(false);

   const handleProjectDesc=()=>{
        setFlag(!flag)  
   }

  return (
     <div id="work" className='px-4 md:px-10 pt-24 md:pt-28 py-8 flex flex-col scroll-smooth'>
     
       <span className='text-5xl font-semibold'>Work</span>
        
       <div className="pt-14 grid grid-cols-3 space-x-10 items-center">
          
          <div onClick={()=>{handleProjectDesc()}}
               className="relative h-96 rounded-xl cursor-pointer opacity-80 hover:opacity-100">
            <img className=" h-full w-full rounded-xl" 
               src={MovieHub} alt="" />

                <div className="absolute w-full bg-black/50 bottom-0 p-2 px-4 flex flex-col">
                        <span className="font-extrabold underline text-xl pb-5">Tech</span>
                        <div className="flex items-center space-x-5 text-xs flex-wrap space-y-3">
                               <span className="bg-slate-600  px-3 py-1.5 rounded-2xl">JS</span>
                               <span className="bg-slate-600  px-3 py-1.5 rounded-2xl">React</span>
                               <span className="bg-slate-600  px-3 py-1.5 rounded-2xl">Tailwind</span>
                               <span className="bg-slate-600  px-3 py-1.5 rounded-2xl">Redux ToolKit</span>
                               <span className="bg-slate-600  px-3 py-1.5 rounded-2xl">FireBase</span>
                        </div>
                </div>   
          </div>

           <div onClick={()=>{handleProjectDesc()}}
                className="relative h-96 rounded-xl cursor-pointer opacity-80 hover:opacity-100">
            <img className=" h-full w-full rounded-xl" 
               src={Yummy} alt="" />

                <div className="absolute w-full bg-black/50 bottom-0 p-2 px-4 flex flex-col">
                        <span className="font-extrabold underline text-xl pb-5">Tech</span>
                        <div className="flex items-center space-x-5 text-xs flex-wrap space-y-3">
                               <span className="bg-slate-600  px-3 py-1.5 rounded-2xl">JS</span>
                               <span className="bg-slate-600  px-3 py-1.5 rounded-2xl">React</span>
                               <span className="bg-slate-600  px-3 py-1.5 rounded-2xl">Tailwind</span>
                               <span className="bg-slate-600  px-3 py-1.5 rounded-2xl">ContextAPI + Redux ToolKit</span>
                               <span className=""></span>
                        </div>
                </div>      
          </div>


          {/* <div className="relative h-96 rounded-xl cursor-pointer opacity-80 hover:opacity-100">
            <img className="h-full w-full rounded-xl" 
               src={Yummy} alt="" />
          </div> */}
          
       </div>

     <WorkDisc setFlag={setFlag} flag={flag} />

    </div>
  )
}

export default Work