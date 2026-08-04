import { personalInfo } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative overflow-hidden border-b-4 border-black">
      {/* Decorative floating shapes */}
      <div className="absolute top-1/3 left-[10%] w-16 h-16 bg-neo-blue border-4 border-black shadow-hard animate-bounce hidden lg:block rotate-12" />
      <div className="absolute bottom-1/3 right-[10%] w-24 h-24 bg-neo-pink rounded-full border-4 border-black shadow-hard hidden lg:block animate-pulse" />
      <div className="absolute top-20 right-20 text-9xl opacity-5 font-black select-none pointer-events-none">
        CODE
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        {/* Status badge */}
        <div className="inline-block bg-neo-white border-2 border-black px-4 py-1 mb-6 shadow-hard rotate-[-2deg] reveal">
          <span
            className="font-bold text-neo-green bg-black px-2 mr-2"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            ●
          </span>
          <span
            className="font-bold"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            {personalInfo.status.toUpperCase().replace(/ /g, "_")}
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="text-[13vw] md:text-[10vw] leading-[0.8] font-black uppercase tracking-tighter mb-6 reveal mix-blend-darken"
        >
          AI / ML
          <br />
          <span
            className="text-white"
            style={{ WebkitTextStroke: "3px black" }}
          >
            ENTHUSIAST
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 bg-neo-yellow border-2 border-black p-4 shadow-hard reveal rotate-1"
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        >
          {personalInfo.bio}
          <br />
          <b>{personalInfo.tagline}</b>
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row justify-center gap-6 reveal">
          <a
            href="#projects"
            className="bg-black text-white border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-green hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
          >
            VIEW DATABASE
          </a>
          <a
            href={personalInfo.resumePath}
            download
            className="bg-neo-white text-black border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-pink hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
}
