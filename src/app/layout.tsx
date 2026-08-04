import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport = {
  themeColor: "#121212",
};

export const metadata: Metadata = {
  title: "KISHORE P | AI/ML & Full-Stack Developer",
  description:
    "Kishore P — 3rd-year B.Tech student at VIT Chennai specializing in AI, ML, Deep Learning, Full-Stack Web Development, and Robotics. Available for opportunities.",
  keywords: [
    "Kishore P",
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Full Stack Developer",
    "VIT Chennai",
    "Portfolio",
    "Next.js",
    "React",
    "TensorFlow",
    "PyTorch",
  ],
  authors: [{ name: "Kishore P" }],
  metadataBase: new URL("https://kishore-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://kishore-portfolio.vercel.app",
    title: "KISHORE P | AI/ML & Full-Stack Developer",
    description:
      "Kishore P — AI/ML Enthusiast & Full-Stack Developer specializing in deep learning, computer vision, and modern web applications.",
    images: [{ url: "/images/og_icon.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KISHORE P | AI/ML & Full-Stack Developer",
    description: "AI/ML Enthusiast & Full-Stack Developer. VIT Chennai. 13+ Projects.",
    images: ["/images/og_icon.png"],
  },
  icons: {
    icon: "/images/title_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-display antialiased text-neo-black selection:bg-neo-black selection:text-neo-yellow`}
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
