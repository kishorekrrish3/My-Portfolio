import { personalInfo } from "@/data/portfolio";

const skillTags = personalInfo.tagline.split("•").map((t) => t.trim());

export default function HeroSection() {
  const [firstName, ...rest] = personalInfo.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-16 relative overflow-hidden border-b-4 border-black">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neo-yellow/20 -skew-x-12 translate-x-1/4 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Main content */}
          <div className="lg:col-span-7 text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-3 py-1.5 mb-8 shadow-hard-sm reveal">
              <span className="w-2 h-2 rounded-full bg-neo-green animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                {personalInfo.status}
              </span>
            </div>

            {/* Greeting + Name */}
            <p
              className="font-mono text-sm md:text-base text-gray-600 mb-2 reveal"
            >
              &gt; Hello, world — I&apos;m
            </p>
            <h1 className="reveal mb-4">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                {firstName}
              </span>
              {lastName && (
                <span
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white"
                  style={{ WebkitTextStroke: "2px black" }}
                >
                  {lastName}
                </span>
              )}
            </h1>

            {/* Role badge */}
            <div className="inline-block bg-neo-yellow border-2 border-black px-5 py-2.5 shadow-hard mb-6 reveal rotate-[-1deg]">
              <span className="font-mono text-lg md:text-xl font-bold uppercase">
                {personalInfo.heroRole}
              </span>
            </div>

            {/* Intro */}
            <p
              className="font-mono text-base md:text-lg max-w-xl mb-8 leading-relaxed reveal"
            >
              {personalInfo.heroIntro}
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mb-10 reveal">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs md:text-sm font-bold uppercase border-2 border-black px-3 py-1 bg-white shadow-hard-sm hover:bg-neo-pink hover:-translate-y-0.5 transition-transform cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 reveal">
              <a
                href="#projects"
                className="bg-black text-white border-2 border-black px-8 py-4 text-base font-bold shadow-hard hover:bg-neo-green hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover text-center"
              >
                VIEW PROJECTS
              </a>
              <a
                href={personalInfo.resumePath}
                download
                className="bg-white text-black border-2 border-black px-8 py-4 text-base font-bold shadow-hard hover:bg-neo-pink hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Terminal card — desktop only */}
          <div className="lg:col-span-5 hidden lg:block reveal">
            <div className="border-4 border-black shadow-hard-xl bg-neo-black text-neo-green font-mono text-sm overflow-hidden rotate-1">
              <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-neo-green/30 bg-neo-black">
                <span className="w-3 h-3 rounded-full bg-neo-red border border-black" />
                <span className="w-3 h-3 rounded-full bg-neo-yellow border border-black" />
                <span className="w-3 h-3 rounded-full bg-neo-green border border-black" />
                <span className="ml-2 text-neo-green/60 text-xs">~/kishore</span>
              </div>
              <div className="p-6 space-y-3 leading-relaxed">
                <p>
                  <span className="text-neo-pink">const</span>{" "}
                  <span className="text-neo-yellow">developer</span> = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-white">&quot;{personalInfo.name}&quot;</span>,
                </p>
                <p className="pl-4">
                  role: <span className="text-white">&quot;{personalInfo.heroRole}&quot;</span>,
                </p>
                <p className="pl-4">
                  location: <span className="text-white">&quot;{personalInfo.location}&quot;</span>,
                </p>
                <p className="pl-4">
                  status: <span className="text-neo-green">&quot;Open to opportunities&quot;</span>,
                </p>
                <p>{"}"};</p>
                <p className="pt-2">
                  <span className="text-neo-blue">developer</span>
                  <span className="text-white">.build()</span>
                  <span className="animate-pulse">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
