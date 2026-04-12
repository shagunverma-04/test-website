import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-heading">
          Clean Lines. Quiet Luxury.<br />Everyday Living.
        </h1>
        <p className="hero-subtext">Effortless elegance designed around your life</p>
        <a href="#why-us" className="hero-cta">
          <span className="sparkle-icon">✳</span>
          See how minimal can be magical
        </a>
      </div>
    </section>
  );
}
