import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 border-t-8 border-neo-green relative overflow-hidden"
      style={{ fontFamily: '"JetBrains Mono", monospace' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-4xl font-black mb-6">KISHORE.</h2>
          <p className="text-gray-400 max-w-sm">
            Building intelligent systems with raw aesthetics. AI/ML • Full-Stack • Robotics.
            <br />
            <span className="text-neo-green">Built with Next.js & Appwrite.</span>
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2">
            SITEMAP
          </h3>
          <ul className="space-y-2 text-gray-400">
            {[
              { label: "Home", href: "#" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Work", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-white hover:underline decoration-neo-pink decoration-2 cursor-hover"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-bold text-neo-green mb-4 border-b border-gray-700 pb-2">
            CONNECT
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-neo-green transition-colors cursor-hover"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-neo-blue transition-colors cursor-hover"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-gray-400 hover:text-neo-yellow transition-colors cursor-hover"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
        <p>© 2026 KISHORE.exe // SYSTEM_END</p>
      </div>

      {/* Background watermark */}
      <div className="absolute bottom-0 left-0 w-full text-[20vw] font-black text-white opacity-[0.03] leading-none select-none pointer-events-none text-center">
        BRUTAL
      </div>
    </footer>
  );
}
