import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faCode, faLaptopCode, faRocket, faBriefcase, faO, faExchange} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const milestones = [
  {
    date: "2022 – 2023",
    title: "12ᵗʰ",
    description:
      "kendriya vidyalaya sangathan",
    category: "intermediate",
    icon: faGraduationCap,
  },
   {
    date: "2025 – 2026",
    title: "bachelor of commerce",
    description:
      "PRSU State University",
    category: "Bachelor",
    icon: faGraduationCap,
  },
  {
    date: "2022 – 2023",
    title: "O Level",
    description:
      "Turning Point from where i switched in this field",
    category: "Diploma",
    icon: faO,
  },
  {
    date: "2022 – 2023",
    title: "Full Stack Web Development",
    description:
      "Learned HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL. This sparked my interest in web development.",
    category: "Learning",
    icon: faCode,
  },
  {
    date: "2025 – 2026",
    title: "Master of Computer Applications",
    description:
      "(Integral university lucknow) Completed my MCA, strengthening my academic foundation in computer applications.",
    category: "Education",
    icon: faGraduationCap,
  },
  {
    date: "2024 – Early 2025",
    title: "Startup Experience",
    description:
      "Worked on a job portal and blog platform using HTML, CSS, JavaScript, PHP, and MySQL. Focused on CRUD operations and UI development.",
    category: "Experience",
    icon: faLaptopCode,
  },
  {
    date: "Early 2025",
    title: "The Shift to JavaScript & Frontend",
    description:
      "Focused on strengthening my JavaScript and React fundamentals, learning DSA, and improving problem-solving skills to build efficient, scalable web applications.",
    category: "Career",
    icon: faJs,
  },
  {
    date: "2026 – Present",
    title: "Frontend Development",
    description:
      "Building React projects with Tailwind CSS, practicing JavaScript and DSA, and preparing for frontend developer roles.",
    category: "Career",
    icon: faRocket,
  },
];

export const Timeline=()=>{
  return (
      <div className="">
        

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-8 left-8 top-8 w-1 bg-blue-600" />

          <div className="space-y-10">
            {milestones.map((item, index) => {
              return (
                <article
                  key={item.title}
                  className="group relative flex gap-8"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex shrink-0 items-start">
                    <div
                      className={`flex h-18 w-18 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 bg-blue-950`}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className={`${item.icon==faJs && "text-yellow-500"} text-xs hover:text-sm`}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="relative min-w-0 flex-1 rounded-2xl  border-gray-700 bg-gray-800 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-4">
                    {/* Timeline dot */}


                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <time className="text-xs font-medium text-slate-100">
                        {item.date}
                      </time>

                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold bg-blue-200 text-gray-900"
                      >
                        {item.category}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-slate-100">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-5 text-slate-100">
                      {item.description}
                    </p>

                    
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
  );
}
