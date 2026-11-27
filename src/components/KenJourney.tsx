import { useEffect, useRef } from "react";

const base = `${import.meta.env.BASE_URL}animations/ken/`;
const countries = ["Japan", "Italy", "Ireland"];

export default function KenJourney() {
  const section = useRef<HTMLElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const world = useRef<HTMLImageElement>(null);
  const ken = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0, previous = 0, phase = 0, direction = 1;
    const update = () => {
      if (!section.current || !scene.current || !world.current || !ken.current) return;
      const rect = section.current.getBoundingClientRect();
      const travel = Math.max(1, rect.height - scene.current.offsetHeight - 80);
      const progress = Math.max(0, Math.min(1, (80 - rect.top) / travel));
      const delta = progress - previous;
      if (Math.abs(delta) > 0.00001) {
        direction = delta > 0 ? 1 : -1;
        phase += Math.abs(delta) * 120;
      }
      const width = scene.current.clientWidth;
      const distance = Math.max(0, world.current.offsetWidth - width);
      world.current.style.transform = `translateX(${-progress * distance}px)`;
      const spriteWidth = ken.current.offsetWidth;
      ken.current.style.left = `${Math.max(0, Math.min(width - spriteWidth, width * (0.18 + progress * 0.48) - spriteWidth / 2))}px`;
      ken.current.style.transform = `scaleX(${direction})`;
      ken.current.style.backgroundPosition = `${(reduced.matches ? 0 : Math.floor(phase) % 8) * 100 / 7}% 0`;
      if (label.current) label.current.textContent = countries[Math.min(2, Math.floor(progress * 3))];
      previous = progress;
    };
    const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    world.current?.addEventListener("load", schedule);
    schedule();
    const image = world.current;
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); reduced.removeEventListener("change", schedule); image?.removeEventListener("load", schedule); };
  }, []);

  return (
    <section ref={section} aria-label="Ken's journey through Japan, Italy and Ireland" className="relative w-full h-[230vh] bg-slate-900">
      <div ref={scene} className="sticky top-20 w-full overflow-hidden h-[clamp(280px,38vw,540px)] bg-slate-800">
        <img ref={world} src={`${base}world.webp`} alt="Cartoon panorama of Japan, Milan and Dublin" className="absolute top-0 left-0 h-full max-w-none" style={{width: "auto", minWidth: "300%", objectFit: "fill"}} />
        <div ref={ken} aria-hidden="true" className="absolute" style={{height:"37%", aspectRatio:"140 / 240", bottom:"12%", backgroundImage:`url(${base}walk.png)`, backgroundSize:"800% 100%", backgroundRepeat:"no-repeat"}} />
        <div className="absolute top-4 left-4 rounded-xl bg-slate-950/85 px-4 py-3 text-white">
          <p className="text-xs text-orange-400">Ken's Journey</p>
          <span ref={label} className="text-xl font-bold">Japan</span>
        </div>
        <p className="absolute bottom-2 right-4 rounded bg-slate-950/80 px-3 py-1 text-xs text-white">Scroll to explore · Japan → Italy → Ireland</p>
      </div>
    </section>
  );
}
