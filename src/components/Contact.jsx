import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <h2 className="contact-heading">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            MEANINGFUL.
          </h2>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-right">

          <p className="contact-description">
            I'm always open to discussing new opportunities,
            internships, collaborations, freelance projects,
            or simply connecting with fellow developers and
            designers. Feel free to reach out anytime.
          </p>

          <div className="contact-links">

            <h4>LET'S CONNECT</h4>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dmilesang@gmail.com&su=Portfolio%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/glamorousangel"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/dmilesang/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;