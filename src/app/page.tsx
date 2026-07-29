import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certifications";
import Achievements from "./components/Achievements";
import Social from "./components/Socials";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Education />

      <Experience />

      <Projects />

      <Certifications />

      <Achievements />

      <Social />

      <Contact />

      <Footer />

    </main>
  );
}