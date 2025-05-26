'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) return 0;
        return oldProgress + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="animate-bounce">
        <Image
          src="/construction.svg"
          alt="Under Construction"
          width={200}
          height={200}
          priority
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center">
        Coming Soon
      </h1>
      <p className="text-xl text-gray-600 text-center max-w-2xl">
        We&apos;re working hard to bring you something amazing. Stay tuned!
      </p>
      <div className="mt-8">
        <div className="h-2 w-48 bg-gray-200 rounded-full overflow-hidden">
            <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
            ></div>
        </div>
      </div>
    </div>
  );
}
