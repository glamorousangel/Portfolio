import bg2 from "../assets/bg2.png";
import tatsu from "../assets/projects/tatsu.png";
import dezato from "../assets/projects/dezato.png";
import ers from "../assets/projects/ers.png";
import grabgrub from "../assets/projects/grabgrub.png";
import sambast from "../assets/projects/sambast.png";
import phytosentry from "../assets/projects/Phytosentry.png";
import jg from "../assets/projects/jg.png";
import dma from "../assets/projects/dma.png";
import dns from "../assets/projects/dns.png";

const projects = [
  {
    title: "Tatsu",
    category: "Project Website",
    image: tatsu,
    link: "https://tatsusdaa.netlify.app/",
  },
  {
    title: "Dezato",
    category: "Pastry Website",
    image: dezato,
    link: "https://dezatocafe.netlify.app/",
  },
  {
    title: "HR System",
    category: "Management System",
    image: ers,
    link: "",
  },
  {
    title: "Grab Grub",
    category: "Food Ordering Website",
    image: grabgrub,
    link: "https://glamorousangel.github.io/GrabGrub/",
  },
  {
    title: "Tap. Order. Done.",
    category: "E-Commerce System",
    image: sambast,
    link: "https://sambast.vercel.app/",
  },
  {
    title: "PhytoSentry",
    category: "Disease Detection Mobile Application",
    image: phytosentry,
    link: "",
  },
  {
    title: "Jem Gutierrez",
    category: "Personal Website",
    image: jg,
    link: "https://jem-gutierrez.vercel.app/",
  },
  {
    title: "Glamorous Angel",
    category: "Personal Website",
    image: dma,
    link: "https://glamorousangel.github.io/glamorousangel/",
  },
  {
    title: "Drumm&Strumm",
    category: "E-Commerce System",
    image: dns,
    link: "",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
      style={{
        backgroundImage: `url(${bg2})`,
      }}
    >

      <h1 className="projects-bg-title">
        PROJECTS
      </h1>

      <div className="projects-header">

        <p className="section-label">
          FEATURED WORK
        </p>

        <h2>
          Selected projects showcasing design,
          development, and creativity.
        </h2>

      </div>

      <div className="projects-slider">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.title}
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-info">

              <div>

                <h3>{project.title}</h3>

                <p>{project.category}</p>

              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  View →
                </a>
              ) : (
                <button className="project-button" disabled>
                  Coming Soon
                </button>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;