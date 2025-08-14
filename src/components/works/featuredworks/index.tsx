"use client";
import ContactPopup from "@/components/ContactPopup";
import { ComingsoonCursor } from "@/components/shared/ComingsoonCursor";
import { ProjectType } from "@/utils/fetchprojects";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaRegCalendarDays } from "react-icons/fa6";

export const FeaturedWorks = ({ projects }: { projects: ProjectType[] }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Branding",
  ];

  // Store refs for each project
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [cursorVisible, setCursorVisible] = useState<{
    [key: string]: boolean;
  }>({});

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getYearFromDate = (dateString: string): number => {
    return new Date(dateString).getFullYear();
  };

  return (
    <>
      {isPopupOpen && (
        <ContactPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      )}

      <div className="bg-black/80 py-16 px-6 text-center text-white">
        <h2 className="text-4xl md:text-7xl font-bold mb-4">Featured Work</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          <span className="font-semibold text-green-400">Explore</span> our
          diverse portfolio of successful projects across multiple industries
          and technologies
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                activeCategory === cat
                  ? "bg-green-800 text-black border"
                  : "bg-white/10 border liquid-glass-bg border-white hover:scale-110 hover:bg-green-800 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[project.id] = el;
              }}
              onMouseEnter={() =>
                setCursorVisible((prev) => ({ ...prev, [project.id]: true }))
              }
              onMouseLeave={() =>
                setCursorVisible((prev) => ({ ...prev, [project.id]: false }))
              }
              className="bg-transparent border rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"
            >
              <ComingsoonCursor
                show={!!cursorVisible[project.id]}
                parentRef={{ current: cardRefs.current[project.id] }}
                isCompleted={project.isCompleted}
              />

              <div className="relative overflow-hidden">
                {/* Coming soon cursor for mobile */}
                {!project.isCompleted && (
                  <div className="block md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none transition-transform duration-300 bg-black/10 rounded-full">
                    <svg
                      className="w-32 h-32 animate-spin-slow"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                      </defs>
                      <text fill="#00ff99" fontSize="19" letterSpacing="6px">
                        <textPath href="#circlePath" startOffset="0%">
                          • COMING SOON • COMING SOON •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                )}
                <Image
                  src={project.image1 as string}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={`${
                    project.isCompleted ? "" : "blur-md"
                  } w-full h-64 object-cover transition-transform duration-500 hover:scale-125`}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-transparent shadow-xl border text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className="text-sm flex justify-start items-center gap-x-1">
                    <FaRegCalendarDays /> {getYearFromDate(project.date)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
