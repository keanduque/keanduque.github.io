import { ChevronsDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity})`;
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${
              0.15 * (1 - distance / 150)
            })`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />

      <div className="container mx-auto px-6 py-20 relative z-10 text-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 ">
              Hi, I'm{" "}
              <span className="text-emerald-400">
                <span className="text-orange-400  drop-shadow-[0_0_12px_orange] ">
                  K
                </span>
                ean
                <span className="text-orange-400 drop-shadow-[0_0_12px_orange]">
                  D
                </span>
                uque
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto rounded-full mb-12" />
          </div>

          <p className="text-2xl md:text-3xl text-slate-300 mb-6 animate-slide-up">
            Frontend Developer & Tech Consultant
          </p>

          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto animate-slide-up-delay">
            10+ years crafting exceptional web experiences. Transforming
            business needs into elegant technical solutions.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/keanduque"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 text-orange-400 hover:bg-orange-400 hover:text-slate-950 transition-all duration-300 hover:scale-110 drop-shadow-[0_0_10px_orange]"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/keanduque/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 text-orange-400 hover:bg-orange-400 hover:text-slate-950 transition-all duration-300 hover:scale-110 drop-shadow-[0_0_10px_orange]"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kean_duque@yahoo.com"
              className="p-3 rounded-full bg-slate-800 text-orange-400 hover:bg-orange-400 hover:text-slate-950 transition-all duration-300 hover:scale-110 drop-shadow-[0_0_10px_orange]"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-orange-400 text-slate-950 rounded-full font-semibold hover:bg-orange-500 transition-all duration-300 hover:scale-105"
          >
            <span>View My Work</span>
          </button>
        </div>
        <button
          onClick={scrollToAbout}
          className="left-1/2 transform -translate-x-1/2 animate-bounce text-orange-400"
        >
          <ChevronsDown size={32} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
