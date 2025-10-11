import { useState } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
