import { Code, Database, Globe, Palette, Rocket, Shield } from "lucide-react";

export default function Expertise() {
  const expertiseAreas = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        "HTML5/CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "jQuery",
        "Responsive Design",
        "Cross-browser Compatibility",
      ],
      color: "orange",
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        "Node.js",
        "ExpressJS",
        "PostgreSQL",
        "PHP & MySQL",
        "WordPress",
        "NetSuite SuiteCommerce",
      ],
      color: "cyan",
    },
    {
      icon: Globe,
      title: "GIS Development",
      skills: [
        "ArcGIS API for JavaScript",
        "ArcGIS Online",
        "Custom Widgets",
        "Web AppBuilder",
        "Geospatial Data Integration",
      ],
      color: "blue",
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        "UI/UX Design",
        "Figma",
        "Adobe XD",
        "Photoshop",
        "WCAG Standards",
        "Design Systems",
      ],
      color: "violet",
    },
    {
      icon: Rocket,
      title: "Performance & Optimization",
      skills: [
        "Performance Optimization",
        "SEO Principles",
        "Testing & Debugging",
        "Accessibility",
        "Code Quality",
      ],
      color: "orange",
    },
    {
      icon: Shield,
      title: "DevOps & Tools",
      skills: [
        "Git",
        "Bitbucket",
        "SVN",
        "AWS",
        "OCI",
        "Version Control",
        "CI/CD",
      ],
      color: "red",
    },
  ];

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Express",
    "Git",
    "AWS",
    "Figma",
    "WordPress",
    "ArcGIS",
    "SASS",
    "Tailwind CSS",
    "jQuery",
    "PHP",
    "MySQL",
  ];

  return (
    <section id="expertise" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Areas of Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto rounded-full mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-orange-400 transition-all hover:scale-105 group"
              >
                <div className="mb-4">
                  <area.icon
                    className="text-orange-400 group-hover:scale-110 transition-transform"
                    size={40}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {area.title}
                </h3>
                <ul className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-slate-400 flex items-start gap-2"
                    >
                      <span className="text-orange-400 mt-1">▹</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg hover:border-orange-400 hover:text-orange-400 transition-all hover:scale-105 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
