import { leadership } from "@/data/portfolio";

const colorMap: Record<string, string> = {
  "neo-yellow": "bg-neo-yellow text-black",
  "neo-green": "bg-neo-green text-black",
  "neo-blue": "bg-neo-blue text-white",
  "neo-pink": "bg-neo-pink text-black",
};

const dotMap: Record<string, string> = {
  "neo-yellow": "bg-neo-yellow",
  "neo-green": "bg-neo-green",
  "neo-blue": "bg-neo-blue",
  "neo-pink": "bg-neo-pink",
};

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-7xl font-black uppercase mb-4 tracking-tighter text-center">
        Leadership<span className="text-neo-purple">_Journey</span>
      </h2>
      <p
        className="text-center text-gray-500 font-bold mb-16"
        style={{ fontFamily: '"JetBrains Mono", monospace' }}
      >
        /// CAMPUS_LEADERSHIP &amp; COMMUNITY_IMPACT
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leadership.map((item) => (
          <div
            key={item.id}
            className="reveal bg-white border-4 border-black p-6 shadow-hard hover:shadow-hard-xl transition-all hover:-translate-y-1"
          >
            {/* Header badge */}
            <div className="flex items-start justify-between mb-4">
              <span
                className={`text-xs font-bold px-3 py-1 border-2 border-black ${colorMap[item.color] || "bg-gray-200 text-black"}`}
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                {item.category.toUpperCase()}
              </span>
              <span
                className="text-xs text-gray-500 font-bold"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                {item.year}
              </span>
            </div>

            {/* Org name */}
            <h3 className="text-xl font-black uppercase mb-1">{item.org}</h3>
            <p
              className={`text-sm font-bold mb-4 ${
                item.color === "neo-blue" ? "text-neo-blue" : ""
              }`}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                color:
                  item.color === "neo-yellow"
                    ? "#b8a000"
                    : item.color === "neo-green"
                    ? "#1a8c2e"
                    : item.color === "neo-blue"
                    ? "#3B82F6"
                    : item.color === "neo-pink"
                    ? "#e04d89"
                    : undefined,
              }}
            >
              @ {item.role}
            </p>

            {/* Achievements */}
            <ul
              className="space-y-2"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              {item.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span
                    className={`mt-1.5 w-2 h-2 flex-shrink-0 ${dotMap[item.color] || "bg-black"} border border-black`}
                  />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
