import { Building2, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Entegro Ltd",
      role: "Sr. Frontend Developer",
      period: "November 2024 - Present",
      location: "Kilkenny, Ireland",
      highlights: [
        "Develop and maintain user interfaces using HTML, CSS, JavaScript, and modern frameworks",
        "Implement GIS functionalities using ArcGIS API for JavaScript",
        "Integrate ArcGIS Online services into web applications for geospatial data analysis",
        "Develop custom widgets and tools to enhance user experience",
        "Collaborate with GIS analysts, data scientists, and backend developers",
      ],
    },
    {
      company: "Neticon - Software and Digital Agency",
      role: "Sr. Frontend Developer",
      period: "January 2024 - October 2024",
      location: "Segrate, Lombardy, Italy",
      highlights: [
        "Developed and implemented user-friendly UI with WCAG standards",
        "Maintained and managed client websites for updates and improvements",
        "Coded responsive layouts and optimized performance",
        "Collaborated with design team to create functional, visually appealing websites",
        "Trained junior colleagues for project customization",
      ],
    },
    {
      company: "Infor",
      role: "Sr. Software Engineer",
      period: "May 2021 - October 2022",
      location: "Philippines",
      highlights: [
        "Enhanced and fixed ticket bugs for Ming.le internally",
        "Worked on WMS RF mobile scanning and barcoding using LPL",
        "Collaborated with architects and UX designers for innovative experiences",
        "Performed full spectrum of functional, cross-browser, and device testing",
      ],
    },
    {
      company: "Oracle",
      role: "Principal Consultant",
      period: "June 2017 - April 2021",
      location: "Makati, Philippines",
      highlights: [
        "Consulted with clients on e-commerce webstore development from requirements to deployment",
        "Implemented solutions using Vanilla JS, Backbone JS, and NetSuite SuiteCommerce",
        "Customized web themes based on customer requirements",
        "Provided solutions for ERP customizations using SuiteScript",
        "Collaborated with Functional Consultants for ERP integrations",
      ],
    },
    {
      company: "Oracle",
      role: "Web Developer",
      period: "October 2015 - June 2017",
      location: "Makati, Philippines",
      highlights: [
        "Implemented e-commerce web stores using HTML, CSS, JavaScript, and Backbone",
        "Developed UI interactions and API integrations",
        "Created new features with high reliability, efficiency, and performance",
      ],
    },
    {
      company: "1902 Software Development Corporation",
      role: "PHP Web Developer",
      period: "February 2013 - April 2015",
      location: "Alabang, Philippines",
      highlights: [
        "Developed WordPress custom themes and plugins for clients",
        "Focused on front-end development for mobile UI and responsive websites",
        "Handled project estimation and UAT before migration",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(15,23,42,0.3) 0%, rgba(15,23,42,0.6) 60%, rgba(15,23,42,1) 100%), url('/sky_bg.jpg')",
        backgroundPosition: "bottom center",

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Professional Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto rounded-full mb-12" />

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-cyan-400 to-orange-400" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-8"
                    }`}
                  >
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-orange-400 transition-all hover:scale-105 group">
                      <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-orange-400 rounded-full -translate-x-1/2 ring-4 ring-slate-900 group-hover:scale-150 transition-transform" />

                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-orange-900/30 p-3 rounded-lg">
                          <Building2 className="text-orange-400" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-orange-400 font-semibold mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.period}
                            </span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mt-4">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="text-slate-300 flex items-start gap-2"
                          >
                            <span className="text-orange-400 mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent, rgb(20, 31, 50, 0.9))",
        }}
      />
    </section>
  );
}
