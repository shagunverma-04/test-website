import './CTABanner.css';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-overlay" />
      <div className="cta-content">
        <div className="cta-text">
          <h2>Let's Design Your Dream Space</h2>
          <p>Book a free consultation and take the first step toward your ideal home.</p>
        </div>
        <a href="#contact" className="btn-outline-white">Book a Free Consultation</a>
      </div>
    </section>
  );
}
