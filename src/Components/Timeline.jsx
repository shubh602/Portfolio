
import {
  faGraduationCap,
  faCode,
  faLaptopCode,
  faRocket,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const milestones = [
  {
    date: "2022 – 2023",
    title: "Full Stack Web Development",
    description:
      "Learned HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL. This sparked my interest in web development.",
    category: "Learning",
    icon: faCode,
    color: "blue",
  },
  {
    date: "2024 – Early 2025",
    title: "Startup Experience",
    description:
      "Worked on a job portal and blog platform using HTML, CSS, JavaScript, PHP, and MySQL. Focused on CRUD operations and UI development.",
    category: "Experience",
    icon: faLaptopCode,
    color: "violet",
  },
  {
    date: "2025 – 2026",
    title: "Master of Computer Applications",
    description:
      "Completed my MCA, strengthening my academic foundation in computer applications.",
    category: "Education",
    icon: faGraduationCap,
    color: "rose",
  },
  {
    date: "2026 – Present",
    title: "Frontend Development",
    description:
      "Building React projects with Tailwind CSS, practicing JavaScript and DSA, and preparing for frontend developer roles.",
    category: "Career",
    icon: faRocket,
    color: "emerald",
  },
];

const colors = {
  blue: {
    dot: "bg-blue-500",
    tag: "bg-blue-50 text-blue-600",
  },
  violet: {
    dot: "bg-violet-500",
    tag: "bg-violet-50 text-violet-600",
  },
  rose: {
    dot: "bg-rose-500",
    tag: "bg-rose-50 text-rose-600",
  },
  emerald: {
    dot: "bg-emerald-500",
    tag: "bg-emerald-50 text-emerald-600",
  },
};

export default function Timeline() {
  return (
    <section className="w-1/2 h-[550px] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-10 py-20">
      <div className="">
        

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-8 left-8 top-8 w-1 bg-blue-600" />

          <div className="space-y-10">
            {milestones.map((item, index) => {
              const theme = colors[item.color];

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
                        className="text-xs hover:text-sm"
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="relative min-w-0 flex-1 rounded-2xl border border-slate-200/80 bg-slate-200 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                    {/* Timeline dot */}


                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <time className="text-xs font-medium text-slate-400">
                        {item.date}
                      </time>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.tag}`}
                      >
                        {item.category}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-5 text-slate-600">
                      {item.description}
                    </p>

                    
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
