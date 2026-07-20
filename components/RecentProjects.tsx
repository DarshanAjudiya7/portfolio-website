"use client";

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";

const projectData = [
  {
    id: 1,
    title: "Budget Accounting System",
    des: "A full-stack accounting dashboard for tracking budgets, invoices and transactions with a typed ORM data layer.",
    img: "/projects/project1.jpeg",
    tags: ["react", "node"],
    iconLists: ["Node.js", "React", "Drizzle ORM", "Zustand"],
    link: "https://shiv-furniture-app.vercel.app/",
    type: "demo"
  },
  {
    id: 2,
    title: "Portfolio Website",
    des: "This site — a hand-built, responsive portfolio focused on clarity, performance and accessible interaction design.",
    img: "/projects/project2.png",
    tags: ["ui", "react"],
    iconLists: ["HTML5", "CSS3", "JavaScript"],
    link: "#home",
    type: "scroll"
  },
  {
    id: 3,
    title: "VibeFy",
    des: "A modern music streaming interface with authenticated user sessions and fluid, motion-driven interactions.",
    img: "/projects/project3.png",
    tags: ["react", "ui"],
    iconLists: ["React 19", "Clerk", "Vite", "Tailwind", "Motion"],
    link: "https://vibefyweb.vercel.app/",
    type: "demo"
  },
  {
    id: 4,
    title: "AlgoArena — LeetCode Clone",
    des: "A full-featured competitive coding platform with real-time problem solving, leaderboard, submission tracking and a code editor — inspired by LeetCode.",
    img: "/projects/project4.png",
    tags: ["react", "node", "ui"],
    iconLists: ["Prisma", "Next.js", "Neon", "Vercel"],
    link: "https://leetcode-clone-delta-sepia.vercel.app/",
    type: "demo"
  },
  {
    id: 5,
    title: "Twitter Clone",
    des: "A full-stack social media platform replicating core Twitter features — tweets, likes, follows, real-time feed and authenticated user profiles.",
    img: "/projects/project5.png",
    tags: ["react", "node", "ui"],
    iconLists: ["Next.js", "React", "Node.js", "Vercel"],
    link: "https://twitter-xi-five.vercel.app/",
    type: "demo"
  },
  {
    id: 6,
    title: "Traveloopl",
    des: "A modern travel planning web app to discover destinations, plan trips and explore curated itineraries with a clean, immersive UI.",
    img: "/projects/project6.png",
    tags: ["react", "ui", "node"],
    iconLists: ["React", "Next.js", "Tailwind", "Vercel"],
    link: "https://traveloopl.vercel.app/",
    type: "demo"
  }
];

const RecentProjects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectData.filter((project) => 
    filter === "all" ? true : project.tags.includes(filter)
  );

  return (
    <div className="py-20 w-full" id="projects">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <h1 className="heading mb-10 text-center">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-10 z-10 relative justify-center" role="group" aria-label="Filter projects by technology">
          {[
            { id: "all", label: "All" },
            { id: "react", label: "React" },
            { id: "node", label: "Node.js" },
            { id: "ui", label: "UI / Frontend" }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === btn.id 
                  ? "bg-purple text-black" 
                  : "bg-black-200 text-white-200 hover:text-white hover:bg-black-300 border border-white/[0.1]"
              }`}
              aria-pressed={filter === btn.id}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-24 mt-10">
          {filteredProjects.map((item) => (
            <div
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center w-full"
              key={item.id}
            >
              <PinContainer
                title={item.link === "#home" ? "Scroll to Top" : "Visit"}
                href={item.link}
              >
                <a href={item.link} target={item.link === "#home" ? "_self" : "_blank"} rel="noopener noreferrer" className="block w-full h-full">
                  <div className="relative flex items-center justify-center w-[80vw] sm:w-[450px] md:w-[500px] lg:w-[400px] xl:w-[500px] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]"
                    >
                      <img src="/bg.png" alt="bg-img" />
                    </div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="z-10 absolute bottom-0 object-contain w-[90%] rounded-xl"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center gap-2 flex-wrap max-w-[65%]">
                      {item.iconLists.map((tag, index) => (
                        <span key={index} className="text-[10px] sm:text-[11px] px-2 py-1 rounded-full bg-purple/10 text-purple border border-purple/20 whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple whitespace-nowrap">
                        {item.type === "demo" ? "Check Live Site" : "Scroll to top"}
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </a>
              </PinContainer>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <p className="text-center text-white-200 py-12 relative z-10">No projects match this filter yet — check back soon.</p>
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
