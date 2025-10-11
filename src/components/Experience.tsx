import { Briefcase, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const expertise = [
    "HTML and CSS for structuring and styling web content",
    "JavaScript (ES6, Libraries and frameworks) for creating interactive and dynamic web interfaces",
    "Responsive design for crafting web layouts that adapt gracefully to various screen sizes",
    "Proficiency in front-end and back-end from Analysis to Deployment of project",
    "Configuration and version control for tracking of codebase",
    "Cross-browser compatibility and web standards",
    "Performance optimization and SEO principles",
    "Testing, debugging, and problem-solving",
    "Collaboration and communication with teams and clients",
  ];

  const highlights = [
    {
      title: "10+ Years",
      subtitle: "Professional Experience",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Full-Stack",
      subtitle: "Development Capability",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Client-Focused",
      subtitle: "Solutions Delivery",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-orange-400">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Over a decade of crafting exceptional web experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-emerald-400 transition-all duration-300 group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-400">{highlight.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 p-8 md:p-12 rounded-2xl border border-slate-700">
          <div className="flex items-center space-x-3 mb-8">
            <Briefcase className="w-8 h-8 text-orange-400" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Areas of Expertise
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Professional Philosophy
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            My strength is my ability to truly understand what clients need, and
            translate business needs into technical requirements upon
            collaboration and meeting with clients.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            My skills are specialized in developing front-end websites including
            CMS, e-commerce, and web apps, with a focus on visual appeal,
            usability, accessibility, brand consistency, and website performance
            optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
