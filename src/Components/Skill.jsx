
const Skill = () => {

  const skillList=[ 
                "HTML5",
                "CSS3",
                "JavaScript",
                "React.js",
                "Redux Toolkit",
                "Tailwind CSS",
                "REST APIs",
                "Firebase",
                "Git",
                "GitHub",
                "Data Structures & Algorithms",
                "Problem Solving",
        ]

  return (
    <div id="skill" className='px-4 md:px-10 pt-24 md:pt-28 py-8 flex flex-col'>
        <span className='text-5xl font-bold pb-14'>Skills</span>

        <div className="flex flex-row flex-wrap space-x-14 space-y-7 font-semibold text-lg">
            
          {
            skillList.map(item=>
                 <span className=' h-fit w-fit cursor-pointer border-2 text-nowrap border-blue-700 shadow-md shadow-blue-400 hover:text-blue-200 hover:opacity-80 px-5 py-1 rounded-3xl'>{item}</span>
            )
          }  

        </div>
    </div>
  )
}

export default Skill