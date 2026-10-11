import { site } from "../config/site";
import CTA from "../components/CTA";
// import Timeline from "../components/Timeline";
import "../styles/hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="topbar">
          <span className="brand">{site.name}</span>
          <span className="loc">{site.location}</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="role">{site.role}</p>
            <h1>{site.headline}</h1>
            <p className="usp">{site.usp}</p>
            <div className="cta-row">
              <CTA />
              {/* <p className="cta-note">{site.ctaNote}</p> */}
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait">
              <span className="initials">{site.initials}</span>
              {/* Put your photo at public/me.jpg */}
              <img
                src="/me.jpg"
                alt={site.name}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            {/* <Timeline /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
