import { useEffect, useRef, useState } from "react";
import stickyLogo from "../assets/iconw.png";

function Navbar({ items, activeSection }) {
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!sentinelRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: [1],
      },
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div ref={sentinelRef} className="nav-sentinel" aria-hidden="true" />

      <header className={`navbar ${isSticky ? "is-sticky" : ""}`}>
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
    </>
  );
}

export default Navbar;