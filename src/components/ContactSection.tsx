"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="bg-white border-4 border-black shadow-hard-xl p-8 md:p-12 relative reveal mt-12">
        <div className="absolute -top-10 -left-6 bg-neo-yellow border-4 border-black px-6 py-2 shadow-hard rotate-[-5deg]">
          <span className="font-black text-2xl">LET&rsquo;S TALK</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left info */}
          <div>
            <h2 className="text-6xl font-black uppercase mb-6 leading-[0.85]">
              Let&rsquo;s
              <br />
              Build
              <br />
              Together.
            </h2>
            <p
              className="text-lg mb-8 text-gray-600"
              style={{ fontFamily: '"JetBrains Mono", monospace' }}
            >
              I&rsquo;m currently open to:
              <br />
              &gt; Internship Opportunities
              <br />
              &gt; Research Collaborations
              <br />
              &gt; Full-Time Roles starting 2026
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg font-bold hover:bg-neo-blue cursor-hover break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-lg font-bold">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          {submitted ? (
            <div className="py-20 text-center bg-gray-50 border-2 border-black">
              <svg
                className="w-16 h-16 text-neo-green mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <h3 className="text-2xl font-black uppercase">Transmission Received</h3>
              <p
                className="text-sm mt-2 text-gray-600"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                System response initialized. I will reach out shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-6 border-2 border-black"
            >
              <div className="flex flex-col">
                <label
                  className="font-bold mb-1 uppercase text-xs"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  Identity *
                </label>
                <input
                  type="text"
                  required
                  placeholder="NAME / COMPANY"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-bold mb-1 uppercase text-xs"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  Coordinates *
                </label>
                <input
                  type="email"
                  required
                  placeholder="EMAIL ADDRESS"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-bold mb-1 uppercase text-xs"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  Transmission *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Kishore, I'd like to discuss..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all resize-none cursor-hover"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-neo-blue text-white font-black text-xl py-4 border-2 border-black shadow-hard hover:bg-neo-black hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
              >
                TRANSMIT DATA
              </button>
              <p
                className="text-xs text-gray-500 text-center"
                style={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                Messages stored securely via Appwrite.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
