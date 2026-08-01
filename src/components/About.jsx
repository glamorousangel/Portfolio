import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/bg1.png";
import chromeImage from "../assets/chrome.png";

const PARTICLE_COUNT = 12;

function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!aboutRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.32,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`section about-section${isVisible ? " is-visible" : ""}`}
      style={{ "--about-bg": `url(${bgImage})` }}
    >
      <div className="about-bg" aria-hidden="true" />
      <div className="about-overlay" aria-hidden="true" />
      <div className="about-smoke about-smoke-left" aria-hidden="true" />
      <div className="about-smoke about-smoke-right" aria-hidden="true" />

      <div className="about-inner">
        <article className="about-side about-side-left">
          <h2 className="about-title about-title-left">WHO AM I?</h2>
          <p className="about-copy about-copy-left">
            Hi, I&apos;m Dorothy Miles Ang, though most people call me Miles. I&apos;m a
            Computer Science student and an aspiring Front-End Developer and
            UI/UX Designer who enjoys creating clean, user-friendly, and
            visually engaging digital experiences. I&apos;m always eager to learn new
            technologies and continuously improve my skills through creative and
            hands-on projects.
          </p>
        </article>

        <div className="about-figure-wrap" aria-hidden="true">
          <div className="about-glow" />
          <div className="about-figure-motion">
            <img className="about-figure-img" src={chromeImage} alt="" />
          </div>
          <div className="about-particles">
            {Array.from({ length: PARTICLE_COUNT }, (_, index) => (
              <span
                key={index}
                className="about-particle"
                style={{ "--particle-index": index }}
              />
            ))}
          </div>
        </div>

        <article className="about-side about-side-right">
          <h2 className="about-title about-title-right">Beyond the Screen</h2>
          <p className="about-copy about-copy-right">
            When I&apos;m not coding or designing, I enjoy expressing my creativity
            through art, music, photography, and videography. I also love reading
            books, watching movies and series, and playing online games. These
            hobbies inspire my creativity, broaden my perspective, and influence
            the way I approach design and problem-solving.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;