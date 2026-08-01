const skills = [
  "Frontend Development",
  "UI/UX Design",
  "React & JavaScript",
  "Brand-Driven Interfaces",
  "Responsive Systems",
  "Prototyping & Handoff",
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">SKILLS</p>
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