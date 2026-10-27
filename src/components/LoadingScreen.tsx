import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onFinish?: () => void;
  show?: boolean;
}

export default function LoadingScreen({ onFinish, show = true }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!show) {
      setIsDone(true);
      return;
    }

    setProgress(0);
    setIsFadingOut(false);
    setIsDone(false);

    let current = 0;
    const interval = setInterval(() => {
      // Natural variable speed progress simulation
      const step = Math.floor(Math.random() * 8) + 4;
      current = Math.min(100, current + step);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsDone(true);
            onFinish?.();
          }, 450);
        }, 320);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [show, onFinish]);

  if (isDone) return null;

  return (
    <div
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none bg-[#fca1b9] transition-all duration-500 ease-out ${
        isFadingOut ? 'pointer-events-none scale-105 opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundColor: '#fca1b9',
      }}
    >
      {/* Centered Loading Block matching Image 2 */}
      <div className="relative flex flex-col items-center px-4">
        {/* Progress Bar Container + Heart */}
        <div className="relative flex items-center">
          {/* Capsule Progress Bar Track */}
          <div
            className="relative h-[34px] w-[290px] xs:h-[38px] xs:w-[350px] sm:h-[42px] sm:w-[420px] rounded-full bg-white p-[3px] shadow-[0_4px_14px_rgba(34,7,25,0.18)]"
            style={{
              border: '3.5px solid #200619',
            }}
          >
            {/* Red / Candy Pink Glossy Progress Fill */}
            <div
              className="relative h-full rounded-full transition-all duration-150 ease-out overflow-hidden"
              style={{
                width: `${Math.max(5, progress)}%`,
                background: 'linear-gradient(180deg, #f24b75 0%, #d81f4f 100%)',
              }}
            >
              {/* Glossy Reflection Highlight */}
              <div
                className="absolute left-2 right-2 top-1 h-[34%] rounded-full bg-white/60 pointer-events-none"
                style={{
                  filter: 'blur(0.4px)',
                }}
              />
            </div>
          </div>

          {/* Heart Graphic positioned at right end */}
          <div
            className="absolute -right-3.5 sm:-right-4.5 -top-1 sm:-top-1.5 pointer-events-none drop-shadow-sm"
            style={{
              animation: 'heartbeat 1.8s ease-in-out infinite',
            }}
          >
            <svg
              className="h-10 w-10 sm:h-12 sm:w-12 overflow-visible"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Heart Body */}
              <path
                d="M18 31.5C18 31.5 5 23.5 3 14C1 5.5 10 2.5 18 10C26 2.5 35 5.5 33 14C31 23.5 18 31.5 18 31.5Z"
                fill="#eb335c"
                stroke="#200619"
                strokeWidth="3.2"
                strokeLinejoin="round"
              />
              {/* Gloss Reflection Curve on top right lobe */}
              <path
                d="M24 7.5 C27.5 9 29 11.5 28.5 14"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
                opacity="0.9"
              />
              {/* Secondary tiny gloss dot */}
              <circle cx="28.5" cy="16" r="1" fill="#ffffff" opacity="0.8" />
            </svg>
          </div>
        </div>

        {/* LOADING... Title matching Image 2 */}
        <h2
          className="font-cute mt-8 text-[32px] sm:text-[40px] font-extrabold tracking-[0.24em] text-[#ee335e] drop-shadow-xs"
          style={{
            fontFamily: "'Fredoka', 'DM Sans', cursive, sans-serif",
            textShadow: '0 1px 2px rgba(238,51,94,0.18)',
          }}
        >
          L O A D I N G . . .
        </h2>

        {/* Portfolio Rini.. */}
        <p
          className="font-cute mt-2 text-[18px] sm:text-[22px] font-bold text-[#3d132b]"
          style={{
            fontFamily: "'Fredoka', 'DM Sans', cursive, sans-serif",
          }}
        >
          Portfolio Rini..
        </p>

        {/* Percentage Counter */}
        <span
          className="font-cute mt-1 text-[14px] sm:text-[16px] font-bold text-[#3d132b]"
          style={{
            fontFamily: "'Fredoka', 'DM Sans', cursive, sans-serif",
          }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
}
