export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            About Me
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side — Text */}
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Experienced Web Developer with over{" "}
                <span className="text-orange-400 font-semibold">
                  10 years of expertise
                </span>{" "}
                in developing top-quality website and web applications.
                Currently working as a Senior Frontend Developer at Entegro Ltd,
                specializing in GIS development with ArcGIS API.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Proficient in HTML, CSS, and JavaScript, with a keen eye for
                crafting clean, user-friendly, and responsive designs. I possess
                strong problem-solving abilities and excellent communication
                skills, thriving in fast-paced environments.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My passion for learning new technologies drives me to
                continuously expand my skill set, seeking opportunities to
                contribute to organizations' online visibility and growth
                objectives.
              </p>
            </div>

            {/* Right side — Avatar */}
            <div className="flex justify-center">
              <div className="relative w-full h-full md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src="/keanCoder_ed.png"
                  alt="Kean Coder Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* My Strength Section */}
          <div className="bg-gradient-to-br from-orange-900/20 to-cyan-900/20 border border-orange-500/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              My Strength
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              My ability to truly understand what clients need, and translate{" "}
              <span className="text-orange-400 font-semibold">
                Business needs into Technical requirements
              </span>{" "}
              upon collaboration and meeting with clients.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My skills are specialized in developing front-end websites
              including CMS, e-commerce, and web apps, focusing on visual
              appeal, usability, accessibility, brand consistency, and website
              performance optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent, rgb(19, 32, 54, 0.95))",
        }}
      />
    </section>
  );
}
