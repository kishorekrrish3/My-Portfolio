"use client";

import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/portfolio";

const CATEGORIES: ProjectCategory[] = ["All", "AI", "ML/DL", "Web Development", "Others"];

const categoryColors: Record<ProjectCategory, string> = {
  All: "bg-neo-black text-white",
  AI: "bg-neo-yellow text-black",
  "ML/DL": "bg-neo-purple text-white",
  "Web Development": "bg-neo-blue text-white",
  Others: "bg-neo-orange text-black",
};

const hoverTitleColors = [
  "group-hover:text-neo-red",
  "group-hover:text-neo-blue",
  "group-hover:text-neo-pink",
  "group-hover:text-neo-orange",
  "group-hover:text-neo-green",
  "group-hover:text-neo-purple",
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.category.includes(activeFilter)
  );

  return (
    <section
      id="projects"
      className="py-24 bg-[#FFFDE8] border-t-4 border-black px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-6xl md:text-9xl font-black mb-8 uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
          style={{ WebkitTextStroke: "3px black" }}
        >
          Selected Works
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 font-bold text-sm border-2 border-black shadow-hard-sm cursor-hover transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none ${
                activeFilter === cat
                  ? categoryColors[cat]
                  : "bg-white text-black"
              }`}
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              {cat === "All" ? "⊞ ALL" : cat}
            </button>
          ))}
          <span
            className="px-4 py-2 border-2 border-black bg-neo-black text-neo-green text-sm font-bold shadow-hard-sm"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            {filtered.length} PROJECTS
          </span>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filtered.map((project, idx) => (
            <article
              key={project.id}
              className={`group bg-white border-4 border-black p-4 shadow-hard transition-all duration-300 ${
                idx % 2 !== 0 ? "mt-0 md:mt-20" : ""
              }`}
            >
              {/* Project image / gradient */}
              <div className="border-2 border-black aspect-video relative overflow-hidden mb-6 group-hover:shadow-none transition-all">
                <div
                  className="w-full h-full flex items-end p-4 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                  }}
                >
                  <span
                    className="text-6xl font-black text-black/20 select-none"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>
                {/* Category badge */}
                <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                  {project.category.slice(0, 2).map((cat) => (
                    <span
                      key={cat}
                      className={`text-xs font-bold px-2 py-0.5 border border-black ${categoryColors[cat]}`}
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <h3
                    className={`text-3xl font-black uppercase mb-2 transition-colors glitch-hover ${hoverTitleColors[idx % hoverTitleColors.length]}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mb-4 max-w-xs text-gray-700"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    {project.description}
                  </p>
                  <div className="flex gap-2 font-bold flex-wrap text-xs"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="bg-neo-black text-white px-2 py-1">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="bg-gray-200 text-black px-2 py-1 border border-black">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href={`https://github.com/kidkrrish3`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-black bg-neo-green flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-hover shadow-hard-sm flex-shrink-0"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-24">
          <a
            href="https://github.com/kidkrrish3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neo-black text-white px-12 py-5 font-bold text-xl hover:bg-neo-white hover:text-black border-4 border-black transition-all shadow-hard hover:shadow-none cursor-hover"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            VIEW ALL REPOS ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
