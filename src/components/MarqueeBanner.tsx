export default function MarqueeBanner() {
  const text =
    "/// OPEN FOR WORK /// AI/ML DEVELOPMENT /// FULL-STACK WEB /// DEEP LEARNING /// ROBOTICS /// COMPUTER VISION /// ";

  return (
    <div className="border-b-4 border-black bg-neo-blue py-3 relative z-20">
      <div className="marquee-container font-bold text-2xl text-white"
        style={{ fontFamily: '"JetBrains Mono", monospace' }}>
        <div className="marquee-content">
          {text}
          {text}
        </div>
      </div>
    </div>
  );
}
