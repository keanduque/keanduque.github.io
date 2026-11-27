import KenJourney from "./KenJourney";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          About Me
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto rounded-full mb-8" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* About Me */}
          <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
            <p>
              Hi there! I'm Kean, a frontend developer and software engineer who
              enjoys building things for the web.
            </p>

            <p>
              With over{" "}
              <span className="text-orange-400 font-semibold">
                10 years of experience
              </span>{" "}
              in web development, e-commerce and enterprise software, I enjoy
              creating responsive, accessible and user-friendly applications.
              I'm particularly interested in the connection between design and
              development, where a good user experience meets clean,
              maintainable code.
            </p>

            <p>
              Currently, I'm a Senior Frontend Developer at{" "}
              <a
                href="https://entegro.ie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 font-semibold hover:text-orange-300 transition-colors"
              >
                Entegro
              </a>
              , where I build React applications, interactive maps and
              geospatial tools for telecommunications and utility projects.
            </p>

            <p>
              When I'm away from my keyboard, you'll usually find me out running
              or exploring my interest in animation. I also enjoy experimenting
              with new technologies through personal projects.
            </p>
          </div>

          {/* Profile Avatar */}
          <div className="flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}keanCoder_ed.png`}
              alt="Kean Coder avatar"
              loading="lazy"
              className="w-72 md:w-96 aspect-square rounded-full object-cover border-4 border-orange-400"
            />
          </div>
        </div>

        {/* How I Work */}
        <div className="rounded-2xl border border-orange-500/30 bg-slate-800 p-8">
          <h3 className="text-2xl font-bold text-white mb-4">How I Work</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            I believe good software starts with understanding the problem, not
            just writing code. I enjoy working with people, sharing ideas and
            finding practical solutions together.
          </p>

          <p className="text-slate-300 leading-relaxed">
            I care about clean code, accessibility and the small details that
            make an application easier to use. I'm always curious about new
            technologies and enjoy learning through hands-on projects.
          </p>
        </div>
      </div>
    </section>
  );
}
