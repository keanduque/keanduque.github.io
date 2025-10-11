import { Code, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Focused",
      description:
        "Exceptional ability to understand client needs and translate business requirements into technical solutions",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Capable",
      description:
        "Expertise in front-end and back-end development from analysis to deployment",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Driven",
      description:
        "Specialized in visual appeal, usability, accessibility, and performance optimization",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Continuous Learner",
      description:
        "Passionate about learning new technologies and expanding skill set",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-orange-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Experienced Web Developer with over{" "}
              <span className="text-orange-400 font-semibold">
                10 years of expertise
              </span>{" "}
              in developing top-quality websites and web applications.
              Proficient in HTML, CSS, and JavaScript, with a keen eye for
              crafting clean, user-friendly, and responsive designs.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Possessing strong problem-solving abilities and excellent
              communication skills, I thrive in fast-paced environments and
              excel at meeting challenges head-on. My passion for learning new
              technologies drives me to continuously expand my skill set.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Seeking opportunities to leverage my experience and contribute to
              organizations' online visibility and growth objectives.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">My Strengths</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-orange-400 mt-1">•</div>
                <p className="text-slate-300">
                  Translating business needs into technical requirements through
                  client collaboration
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-orange-400 mt-1">•</div>
                <p className="text-slate-300">
                  Developing front-end websites including CMS, e-commerce, and
                  web apps
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-orange-400 mt-1">•</div>
                <p className="text-slate-300">
                  Focus on visual appeal, usability, accessibility, and brand
                  consistency
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-orange-400 mt-1">•</div>
                <p className="text-slate-300">
                  Website performance optimization and responsive design
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-orange-400 mb-4">{strength.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {strength.title}
              </h4>
              <p className="text-slate-400 text-sm">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
