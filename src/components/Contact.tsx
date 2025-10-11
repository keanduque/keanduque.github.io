import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-orange-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            I'm always eager to hear from others and expand my network. Let's
            connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-slate-900 rounded-lg border border-slate-800">
                  <Mail className="w-6 h-6 text-orange-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-white hover:text-orange-400 transition-colors"
                    >
                      kean_duque@yahoo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-slate-900 rounded-lg border border-slate-800">
                  <MapPin className="w-6 h-6 text-orange-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white">Kilkenny, Ireland</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/keanduque"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 text-orange-400 hover:bg-orange-400 hover:text-slate-950 transition-all duration-300 hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/keanduque/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 text-orange-400 hover:bg-orange-400 hover:text-slate-950 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                Open to Opportunities
              </h4>
              <p className="text-slate-300">
                Seeking opportunities to leverage my experience and contribute
                to organizations' online visibility and growth objectives.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-orange-400 text-slate-950 rounded-lg font-semibold hover:bg-emerald-500 transition-all duration-300 hover:scale-105"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-slate-800 pt-8">
          <img
            src="/keanduque-avatar.png"
            alt="Keanduque Logo"
            className="h-10 mx-auto"
          />
          <p className="text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-orange-400">K</span>
            <span className="text-emerald-400">EAN</span>
            <span className="text-orange-400">D</span>
            <span className="text-emerald-400">UQUE</span>.<br />
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
