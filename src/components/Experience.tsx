import { Building2, Calendar } from "lucide-react";
import { experiences } from "../data/experience";
export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Professional Experience
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto rounded-full mb-8" />
        <div className="relative">
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-cyan-400 to-orange-400" />
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative pl-8 md:pl-0">
                <div className="absolute left-2 md:left-1/2 top-8 w-4 h-4 bg-orange-400 rounded-full -translate-x-1/2 ring-4 ring-slate-900" />
                <article
                  className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"} bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-400 transition-colors`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Building2 className="text-orange-400 shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-orange-400 font-semibold">
                        {exp.company}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                        <Calendar size={14} />
                        {exp.period}
                      </p>
                      <p className="text-sm text-slate-400">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 list-disc pl-5 text-slate-300">
                    {exp.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
