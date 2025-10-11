import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "ArcGIS Web Application",
      category: "GIS Development",
      description:
        "Custom GIS web application with ArcGIS API integration, featuring interactive maps, geospatial data visualization, and custom widgets for data analysis.",
      technologies: ["ArcGIS API", "JavaScript", "React", "TypeScript"],
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "orange",
    },
    {
      title: "NetSuite SuiteCommerce Platform",
      category: "E-commerce",
      description:
        "Enterprise e-commerce solution built on NetSuite SCA with custom themes, SuiteScript integrations, and optimized checkout flow for Fortune 500 clients.",
      technologies: ["NetSuite SCA", "Backbone.js", "SuiteScript", "SASS"],
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "blue",
    },
    {
      title: "Enterprise Web Application",
      category: "Full Stack",
      description:
        "Scalable web application with real-time features, RESTful APIs, and responsive UI. Built for high-traffic enterprise environment with advanced security.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "cyan",
    },
    {
      title: "WordPress Multi-site Platform",
      category: "CMS Development",
      description:
        "Custom WordPress multi-site network with bespoke theme development, plugin architecture, and headless CMS capabilities for content distribution.",
      technologies: ["WordPress", "PHP", "MySQL", "REST API"],
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "violet",
    },
    {
      title: "Responsive Design System",
      category: "UI/UX",
      description:
        "Comprehensive design system with reusable components, accessibility standards (WCAG), and documentation for enterprise-wide implementation.",
      technologies: ["React", "Tailwind CSS", "Figma", "Storybook"],
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "orange",
    },
    {
      title: "Real-time Dashboard",
      category: "Data Visualization",
      description:
        "Interactive dashboard with real-time data visualization, advanced filtering, and export capabilities for business intelligence and reporting.",
      technologies: ["React", "D3.js", "WebSocket", "TypeScript"],
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "red",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in web development,
            GIS applications, and e-commerce solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-orange-400 transition-all hover:scale-105 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500/90 text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-slate-900 text-slate-300 rounded-lg border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                    <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm">
                      <Github size={16} />
                      <span>Code</span>
                    </button>
                    <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
