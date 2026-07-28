function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>

        <div className="project-grid">
          {[1, 2, 3].map((item) => (
            <div className="project-card" key={item}>
              <div className="project-image">Image</div>

              <h3>Project {item}</h3>

              <p>
                A short description about this project goes here.
              </p>

              <button>View Project</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;