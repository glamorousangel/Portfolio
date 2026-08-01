function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">PROJECTS</p>
        <h2>Selected work focused on clarity, craft, and impact.</h2>

        <div className="project-grid">
          {["Editorial Landing", "Mobile UI System", "Portfolio Redesign"].map(
            (item) => (
            <div className="project-card" key={item}>
              <div className="project-image">Preview</div>

              <h3>{item}</h3>

              <p>A concise project summary goes here.</p>

              <button type="button">View Project</button>
            </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;