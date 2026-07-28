const skills = [
  "Java",
  "Python",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "MySQL",
  "Git",
  "GitHub",
  "Figma",
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;