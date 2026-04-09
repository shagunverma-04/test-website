import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Interior Design Studio</p>
        <h1 className="hero-heading">
          Clean Lines. Quiet Luxury.<br />Everyday Living.
        </h1>
        <p className="hero-subtext">Effortless elegance designed around your life</p>
        <a href="#why-us" className="hero-cta">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          See how minimal can be magical
        </a>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
