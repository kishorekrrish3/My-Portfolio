import { certifications } from "@/data/portfolio";

const colorTextMap: Record<string, string> = {
  "neo-green": "text-neo-green",
  "neo-blue": "text-neo-blue",
  "neo-purple": "text-neo-purple",
  "neo-pink": "text-neo-pink",
  "neo-orange": "text-neo-orange",
  "neo-yellow": "text-neo-yellow",
  "neo-red": "text-neo-red",
};

const colorBorderMap: Record<string, string> = {
  "neo-green": "hover:border-neo-green/50",
  "neo-blue": "hover:border-neo-blue/50",
  "neo-purple": "hover:border-neo-purple/50",
  "neo-pink": "hover:border-neo-pink/50",
  "neo-orange": "hover:border-neo-orange/50",
  "neo-yellow": "hover:border-neo-yellow/50",
  "neo-red": "hover:border-neo-red/50",
};

const colorBgMap: Record<string, string> = {
  "neo-green": "bg-neo-green",
  "neo-blue": "bg-neo-blue",
  "neo-purple": "bg-neo-purple",
  "neo-pink": "bg-neo-pink",
  "neo-orange": "bg-neo-orange",
  "neo-yellow": "bg-neo-yellow",
  "neo-red": "bg-neo-red",
};

const categoryBadgeColor: Record<string, string> = {
  "AI/ML": "bg-neo-green text-black",
  "Programming": "bg-neo-blue text-white",
  "Web Development": "bg-neo-yellow text-black",
  "Others": "bg-neo-orange text-black",
};

export default function CertificationsSection() {
  // Duplicate for seamless infinite scroll
  const doubled = [...certifications, ...certifications];

  return (
    <section
      id="certifications"
      className="py-24 bg-neo-black border-t-4 border-black overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-16 bg-white/5 border-2 border-white/10 p-4 inline-flex shadow-hard shadow-neo-blue/20">
          <div className="flex gap-2">
            <div className="h-3 w-3 bg-red-500 rounded-full border border-black" />
            <div className="h-3 w-3 bg-yellow-500 rounded-full border border-black" />
            <div className="h-3 w-3 bg-green-500 rounded-full border border-black" />
          </div>
          <h2
            className="font-bold text-white text-xl ml-4 tracking-tighter"
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            CERTIFICATIONS.txt
          </h2>
          <div className="ml-8 px-2 bg-neo-yellow text-black text-[10px] font-black uppercase">
            {certifications.length} CERTS
          </div>
        </div>
      </div>

      {/* Scrolling certifications marquee */}
      <div className="marquee-container group cursor-hover">
        <div className="marquee-content flex gap-8 py-12 px-4 select-none">
          {doubled.map((cert, idx) => (
            <div
              key={`${cert.id}-${idx}`}
              className={`flex-shrink-0 w-[420px] bg-neo-black border-4 border-white/10 p-8 shadow-hard ${colorBorderMap[cert.color]} hover:-translate-y-2 transition-all duration-500 relative group/card overflow-hidden text-left whitespace-normal`}
            >
              {/* Top color bar */}
              <div className={`absolute top-0 left-0 w-full h-1 ${colorBgMap[cert.color]}`} />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rotate-45" />

              <div className="flex justify-between items-start mb-4">
                <div
                  className={`text-xs font-bold tracking-widest uppercase ${colorTextMap[cert.color]}`}
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  CERT_{String(cert.id).padStart(3, "0")}.log
                </div>
                <div
                  className="text-[10px] text-gray-500"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  {cert.year}
                </div>
              </div>

              <div
                className="text-gray-400 text-[10px] mb-3 uppercase tracking-tight"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                FROM: {cert.org}
              </div>

              <p className="font-bold text-xl leading-snug mb-4 text-white/90">
                &ldquo;{cert.name}&rdquo;
              </p>

              <span
                className={`inline-block text-xs font-bold px-2 py-1 border border-black ${categoryBadgeColor[cert.category] || "bg-gray-200 text-black"}`}
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                {cert.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
