import {
  Code2,
  Palette,
  Database,
  Wrench,
  GitBranch,
  Rocket,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Front-End",
      skills: [
        "HTML5/CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "jQuery",
        "SASS/LESS",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Back-End",
      skills: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "PHP",
        "MySQL",
        "REST APIs",
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      skills: [
        "Figma",
        "Adobe XD",
        "Photoshop",
        "UX/UI Design",
        "Wireframing",
        "Prototyping",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & CMS",
      skills: ["WordPress", "Git", "Bitbucket", "SVN", "Vite", "Webpack"],
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Best Practices",
      skills: [
        "Version Control",
        "Cross-browser Compatibility",
        "Web Standards",
        "Testing & Debugging",
        "Code Review",
      ],
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Optimization",
      skills: [
        "Performance",
        "SEO Principles",
        "Accessibility",
        "Load Time",
        "Caching",
      ],
    },
  ];

  const topSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 88 },
    { name: "Responsive Design", level: 95 },
    { name: "UI/UX", level: 85 },
    { name: "Performance Optimization", level: 87 },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-orange-400">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit built over 10+ years of professional
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-emerald-400 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-orange-400">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:border-emerald-400 hover:text-orange-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {topSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-orange-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 italic">
            "Feel free to message me if you want to know more about me. I am
            always eager to hear from others and expand my network."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
