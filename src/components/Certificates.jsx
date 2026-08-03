import ic3 from "../assets/certificates/ic3.jpg";
import introCyber from "../assets/certificates/intro-cyber.jpg";
import networking from "../assets/certificates/networking.jpg";
import linux from "../assets/certificates/linux.jpg";
import os from "../assets/certificates/os.jpg";

const certificates = [
  {
    title: "IC3 Digital Literacy GS6 Level 1",
    issuer: "Certiport",
    date: "Issued May 29, 2024",
    image: ic3,
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Issued Aug 14, 2025",
    image: introCyber,
  },
  {
    title: "IT Specialist - Networking",
    issuer: "Pearson VUE",
    date: "Expires Aug 26, 2030",
    image: networking,
  },
  {
    title: "Linux Essentials",
    issuer: "Cisco",
    date: "Issued Sep 29, 2025",
    image: linux,
  },
  {
    title: "Operating Systems Basics",
    issuer: "Cisco",
    date: "Issued Aug 18, 2025",
    image: os,
  },
];

function Certificates() {
  return (
    <section id="certificates" className="certificates-section">

      <div className="container">

        <h1 className="certificates-title">
          Professional Certifications
        </h1>

        <div className="certificates-grid">

          {certificates.map((cert) => (

            <div
              className="certificate-card"
              key={cert.title}
            >

              <img
                src={cert.image}
                alt={cert.title}
              />

              <div className="certificate-info">

                <h3>{cert.title}</h3>

                <p>{cert.issuer}</p>

                <span>{cert.date}</span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certificates;