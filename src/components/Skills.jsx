const skillsRow1 = [
  "HTML",
  "CSS",
  "JavaScript",
  "GitHub",
  "VS Code",
  "Figma",
];

const skillsRow2 = [
  "Python",
  "Java",
  "C++",
  "Android Studio",
  "MySQL",
];

const skillsRow3 = [
  "Power BI",
  "Canva",
  "UI/UX Design",
  "Ibis Paint",
];

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="container skills-layout">

        <div className="skills-left">
          <h2 className="skills-title">
            Skills&nbsp;&amp;
            <br />
            Expertise
          </h2>
        </div>

        <div className="skills-right">

          <div className="marquee">
            <div className="marquee-track">
              {[...skillsRow1, ...skillsRow1].map((skill, index) => (
                <div className="skill-pill" key={index}>
                  <span className="dot blue"></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="marquee reverse">
            <div className="marquee-track">
              {[...skillsRow2, ...skillsRow2].map((skill, index) => (
                <div className="skill-pill" key={index}>
                  <span className="dot green"></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="marquee">
            <div className="marquee-track">
              {[...skillsRow3, ...skillsRow3].map((skill, index) => (
                <div className="skill-pill" key={index}>
                  <span className="dot purple"></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;