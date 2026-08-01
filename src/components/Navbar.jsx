import { useEffect, useRef, useState } from "react";
import stickyLogo from "../assets/iconw.png";

function Navbar({ items, activeSection }) {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbarElement = navbarRef.current;

    if (!navbarElement) return undefined;

    const getStickyPoint = () => navbarElement.offsetTop;

    let stickyPoint = getStickyPoint();
    let ticking = false;

    const updateStickyState = () => {
      const shouldStick = window.scrollY >= stickyPoint;
      setIsSticky((current) => (current === shouldStick ? current : shouldStick));
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateStickyState);
    };

    const handleResize = () => {
      stickyPoint = getStickyPoint();
      updateStickyState();
    };

    updateStickyState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header ref={navbarRef} className={`navbar ${isSticky ? "is-sticky" : ""}`}>
      <div className="navbar-inner">
        <div className="nav-logo-wrap" aria-hidden={!isSticky}>
          <img src={stickyLogo} alt="Dorothy logo" className="nav-logo" />
        </div>

        <nav className="nav-links" aria-label="Primary Navigation">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${
                activeSection === item.id ? "is-active" : ""
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;