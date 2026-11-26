import {
  Code,
  Database,
  Globe,
  ShoppingCart,
  LayoutTemplate,
  Users,
} from "lucide-react";
import { expertiseAreas } from "../data/expertise";
const icons = [Code, Database, Globe, ShoppingCart, LayoutTemplate, Users];
export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          What I Do
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto rounded-full mb-8" />
        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-10">
          The kinds of projects I work on and the problems I enjoy solving.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = icons[index] ?? Code;
            return (
              <article
                key={area.title}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-400 transition-colors"
              >
                <Icon className="text-orange-400 mb-4" size={36} />
                <h3 className="text-xl font-bold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
