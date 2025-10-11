import { useEffect, useState } from "react";

interface LoaderProps {
  onLoadingComplete: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />

      <div className="relative z-10 text-center">
        <div className="mb-8 animate-pulse">
          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="text-emerald-400 animate-spin-slow">
              <img
                src="/keanduque-avatar.png"
                alt="Keanduque Logo"
                className="h-20 w-auto"
              />
            </div>
          </div>
          {/* <h1 className="text-3xl font-bold text-white mb-2">Kean Duque</h1> */}
          <img
            src="/keanduque-name.png"
            alt="Keanduque Logo"
            className="h-10 w-auto"
          />
          <p className="text-slate-400">Loading Profile...</p>
        </div>

        <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700 mx-auto">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-cyan-500 transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${Math.min(progress, 100)}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </div>
        </div>

        <p className="text-emerald-400 mt-4 font-semibold">
          {Math.min(Math.round(progress), 100)}%
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500 animate-pulse" />
    </div>
  );
}
