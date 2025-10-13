import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-800 bg-no-repeat bg-bottom"
      style={{
        backgroundColor: "#0f172a", // base dark-slate tone
        backgroundImage:
          "linear-gradient(to top, rgba(15,23,42,1) 30%, rgba(15,23,42,0.7) 60%, rgba(15,23,42,0.5) 100%), url('/footer_bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "cover", // prevents stretching
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {/* Email */}
              <a
                href="mailto:kean_duque@yahoo.com"
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-orange-400 transition-all hover:scale-[1.02] group w-full"
              >
                <div className="bg-orange-900/30 p-3 sm:p-4 rounded-lg group-hover:bg-orange-900/50 transition-colors">
                  <Mail className="text-orange-400" size={28} />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-slate-400 text-sm mb-1">Email</p>
                  <p className="text-white font-semibold break-words">
                    kean_duque@yahoo.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+353874312303"
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-orange-400 transition-all hover:scale-[1.02] group w-full"
              >
                <div className="bg-orange-900/30 p-3 sm:p-4 rounded-lg group-hover:bg-orange-900/50 transition-colors">
                  <Phone className="text-orange-400" size={28} />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-slate-400 text-sm mb-1">Phone</p>
                  <p className="text-white font-semibold">(+353) 874312303</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-6 bg-slate-800 border border-slate-700 rounded-xl w-full">
                <div className="bg-orange-900/30 p-3 sm:p-4 rounded-lg">
                  <MapPin className="text-orange-400" size={28} />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-slate-400 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold">Kilkenny, Ireland</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-6 bg-slate-800 border border-slate-700 rounded-xl w-full">
                <div className="bg-orange-900/30 p-3 sm:p-4 rounded-lg">
                  <MapPin className="text-orange-400" size={28} />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-slate-400 text-sm mb-1">Address</p>
                  <p className="text-white font-semibold">
                    6 Desert Court, Ormonde Street
                  </p>
                  <p className="text-slate-400 text-sm">Kilkenny R95KD91</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="border-t border-slate-700 pt-8">
              <p className="text-center text-slate-400 mb-6 text-sm sm:text-base">
                Connect with me on social media
              </p>
              <div className="flex justify-center space-x-6 mb-12">
                <a
                  href="https://github.com/keanduque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 text-orange-400 hover:bg-orange-400 hover:text-slate-950 transition-all duration-300 hover:scale-110 drop-shadow-[0_0_10px_orange]"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/keanduque/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 text-orange-400 hover:bg-orange-400 hover:text-slate-950 transition-all duration-300 hover:scale-110 drop-shadow-[0_0_10px_orange]"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:kean_duque@yahoo.com"
                  className="p-3 rounded-full bg-slate-800 text-orange-400 hover:bg-orange-400 hover:text-slate-950 transition-all duration-300 hover:scale-110 drop-shadow-[0_0_10px_orange]"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
