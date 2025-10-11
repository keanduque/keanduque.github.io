import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto rounded-full mb-12" />

          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-300 text-center mb-12 leading-relaxed">
              I'm always eager to hear from others and expand my network.
              Whether you have a project in mind, need consultation, or just
              want to connect, feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a
                href="mailto:kean_duque@yahoo.com"
                className="flex items-center gap-4 p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-orange-400 transition-all hover:scale-105 group"
              >
                <div className="bg-orange-900/30 p-4 rounded-lg group-hover:bg-orange-900/50 transition-colors">
                  <Mail className="text-orange-400" size={28} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Email</p>
                  <p className="text-white font-semibold">
                    kean_duque@yahoo.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+353874312303"
                className="flex items-center gap-4 p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-orange-400 transition-all hover:scale-105 group"
              >
                <div className="bg-orange-900/30 p-4 rounded-lg group-hover:bg-orange-900/50 transition-colors">
                  <Phone className="text-orange-400" size={28} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Phone</p>
                  <p className="text-white font-semibold">(+353) 874312303</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-slate-800 border border-slate-700 rounded-xl">
                <div className="bg-orange-900/30 p-4 rounded-lg">
                  <MapPin className="text-orange-400" size={28} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold">Kilkenny, Ireland</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-slate-800 border border-slate-700 rounded-xl">
                <div className="bg-orange-900/30 p-4 rounded-lg">
                  <MapPin className="text-orange-400" size={28} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Address</p>
                  <p className="text-white font-semibold">
                    6 Desert Court, Ormonde Street
                  </p>
                  <p className="text-slate-400 text-sm">Kilkenny R95KD91</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8">
              <p className="text-center text-slate-400 mb-6">
                Connect with me on social media
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/keanduque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg transition-all hover:scale-105 border border-slate-700 hover:border-orange-400"
                >
                  <Github size={24} />
                  <span className="font-semibold">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/keanduque/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all hover:scale-105"
                >
                  <Linkedin size={24} />
                  <span className="font-semibold">LinkedIn</span>
                </a>
                <a
                  href="mailto:kean_duque@yahoo.com"
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-all hover:scale-105"
                >
                  <Mail size={24} />
                  <span className="font-semibold">Email Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
