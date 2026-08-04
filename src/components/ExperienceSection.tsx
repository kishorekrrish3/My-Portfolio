import { experiences, education } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-4 tracking-tighter text-center">
        Experience<span className="text-neo-red">_Log</span>
      </h2>
      <p className="text-center font-bold text-gray-500 mb-12"
        style={{ fontFamily: '"JetBrains Mono", monospace' }}>
        /// WORK_EXPERIENCE &amp; ACADEMIC_RECORD
      </p>

      {/* Work Experience */}
      <h3 className="text-2xl font-black uppercase mb-6 border-l-4 border-neo-yellow pl-4">
        Work Experience
      </h3>
      <div className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12 mb-16">
        {experiences.map((exp) => (
          <div key={exp.id} className="reveal relative pl-8 md:pl-16">
            <div
              className={`absolute -left-[14px] top-2 w-6 h-6 ${exp.dotColor} border-4 border-black`}
            />
            <div className="bg-white border-4 border-black p-6 shadow-hard hover:shadow-hard-xl transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                <h4 className="text-3xl font-black uppercase">{exp.role}</h4>
                <span
                  className="font-bold bg-neo-black text-white px-2 py-1 mt-2 md:mt-0"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  {exp.duration.toUpperCase()}
                </span>
              </div>
              <p
                className="text-xl mb-2 font-bold"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                <span className={`inline-block px-2 py-0.5 border border-black ${exp.accentColor === "text-neo-yellow" ? "bg-neo-yellow text-black" : exp.accentColor}`}>
                  @ {exp.company}
                </span>
                {exp.status === "Upcoming" && (
                  <span className="ml-2 text-xs bg-neo-black text-neo-yellow px-2 py-0.5 border border-black align-middle">
                    UPCOMING
                  </span>
                )}
              </p>
              <p
                className="text-gray-700 mb-3"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                {exp.description}
              </p>
              {"package" in exp && exp.package && (
                <p className="font-bold text-neo-green mb-3">
                  💰 Package:{" "}
                  <span className="text-black">{exp.package}</span>
                </p>
              )}
              <div className="flex gap-2 flex-wrap mt-3">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-neo-black text-white px-2 py-1 text-xs font-bold"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <h3 className="text-2xl font-black uppercase mb-6 border-l-4 border-neo-blue pl-4">
        Education
      </h3>
      <div className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12">
        {education.map((edu) => (
          <div key={edu.id} className="reveal relative pl-8 md:pl-16">
            <div
              className={`absolute -left-[14px] top-2 w-6 h-6 ${edu.dotColor} border-4 border-black`}
            />
            <div className="bg-white border-4 border-black p-6 shadow-hard hover:shadow-hard-xl transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                <h4 className="text-2xl font-black uppercase">{edu.degree}</h4>
                <span
                  className="font-bold bg-neo-black text-white px-2 py-1 mt-2 md:mt-0"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  {edu.duration}
                </span>
              </div>
              <p
                className={`text-xl mb-2 font-bold ${edu.accentColor}`}
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                {edu.institution}
              </p>
              {edu.board && (
                <p
                  className="text-gray-500 text-sm mb-2"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  Board: {edu.board}
                </p>
              )}
              {"cgpa" in edu && edu.cgpa && (
                <p
                  className="font-bold text-neo-green"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  CGPA:{" "}
                  <span className="text-black text-xl">{edu.cgpa} / 10</span>
                </p>
              )}
              {"focus" in edu && edu.focus && (
                <div className="flex gap-2 flex-wrap mt-3">
                  {edu.focus.map((f) => (
                    <span
                      key={f}
                      className="bg-neo-blue text-white px-2 py-1 text-xs font-bold"
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}
              {"subjects" in edu && edu.subjects && (
                <div className="flex gap-2 flex-wrap mt-3">
                  {edu.subjects.map((s) => (
                    <span
                      key={s}
                      className="bg-gray-100 text-black border border-black px-2 py-1 text-xs font-bold"
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
