import { useEffect, useMemo, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const navItems = useMemo(
    () => [
      { label: "ABOUT", id: "about" },
      { label: "SKILLS", id: "skills" },
      { label: "PROJECTS", id: "projects" },
      { label: "CONTACT", id: "contact" },
    ],
    [],
  );

  const [activeSection, setActiveSection] = useState(navItems[0].id);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <>
      <main>
        <Hero />
        <Navbar items={navItems} activeSection={activeSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;