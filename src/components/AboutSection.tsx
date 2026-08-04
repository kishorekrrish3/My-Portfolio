import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-white my-12 shadow-hard-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Photo */}
        <div className="md:col-span-4 reveal">
          <div className="aspect-square bg-gray-200 border-4 border-black relative shadow-hard overflow-hidden group">
            <Image
              src="/images/img.jpg"
              alt={personalInfo.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <span
              className="absolute top-2 left-2 bg-neo-red text-white px-2 z-10 text-xs border border-black"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              AVATAR.JPG
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-8 flex flex-col justify-center reveal">
          <h2 className="text-6xl font-black uppercase mb-6">Who am I?</h2>
          <p
            className="text-xl leading-relaxed mb-6"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            I am{" "}
            <span className="bg-neo-yellow px-1 border border-black font-black">
              {personalInfo.name}
            </span>
            , a{" "}
            <span className="bg-neo-yellow px-1 border border-black font-bold">
              B.Tech CSE Graduate (AI & Robotics)
            </span>{" "}
            from{" "}
            <span className="bg-neo-yellow px-1 border border-black font-bold">
              VIT Chennai
            </span>
            . I bring a strong background across AI/ML, Deep Learning, Full-Stack Web Development, Robotics, and UI/UX design, and am currently actively expanding into DevOps & Cloud Computing.
          </p>
          
          <p
            className="text-base mb-6 text-gray-700 border-l-4 border-neo-purple pl-4 space-y-1"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            <span className="block">&gt; 🎓 CGPA: <strong>8.21 / 10.0</strong> — Graduated with distinction.</span>
            <span className="block">&gt; 💼 Upcoming Role: <strong>Specialist Programmer (L1) Trainee</strong> @ Infosys Mysore Campus.</span>
          </p>

          {/* Hobbies / Interests */}
          <div className="mb-8 p-4 bg-neo-white border-2 border-black shadow-hard-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
              /// BEYOND THE TERMINAL (HOBBIES & INTERESTS)
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-bold" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
              <span className="bg-neo-green px-2.5 py-1 border border-black">🏏 Cricket</span>
              <span className="bg-neo-blue text-white px-2.5 py-1 border border-black">⚽ Football</span>
              <span className="bg-neo-pink text-black px-2.5 py-1 border border-black">🎨 Graphic Design</span>
              <span className="bg-neo-purple text-white px-2.5 py-1 border border-black">🎮 Gaming</span>
              <span className="bg-neo-orange text-black px-2.5 py-1 border border-black">⛩️ Anime</span>
              <span className="bg-neo-yellow text-black px-2.5 py-1 border border-black">🍿 Shows & Movies</span>
              <span className="bg-neo-black text-white px-2.5 py-1 border border-black font-mono">&lt;/&gt; Creative Coding</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div
              className="bg-neo-black text-white px-4 py-2 text-sm border-2 border-transparent"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              📍 LOCATION: CHENNAI, INDIA
            </div>
            <div
              className="bg-neo-yellow text-black px-4 py-2 text-sm border-2 border-black"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              🎓 CGPA: 8.21 / 10
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
