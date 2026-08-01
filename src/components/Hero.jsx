import heroBackground from "../assets/bg.png";
import heroLogo from "../assets/iconw.png";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="hero-overlay" />

      <img src={heroLogo} alt="Dorothy logo" className="hero-logo" />

      <div className="hero-content">
        <p className="hero-kicker">THE PORTFOLIO</p>

        <h1 className="hero-title">
          DOROTHY
          <br />
          MILES
        </h1>

        <p className="hero-subtitle">
          BS Computer Science Student | Front-End &amp; UI/UX Enthusiast
        </p>
      </div>
    </section>
  );
}

export default Hero;