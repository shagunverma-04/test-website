import './OurPartners.css';

const partners = [
  { name: 'Hettich', desc: 'German Precision Hardware' },
  { name: 'HÄFELE', desc: 'Functional Hardware' },
  { name: 'ebco', desc: 'Furniture Fittings' },
  { name: 'Asian Paints', desc: 'Premium Paints' },
  { name: 'FABER', desc: 'Kitchen Appliances' },
];

export default function OurPartners() {
  return (
    <section className="our-partners">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>Trusted Brands</p>
        <h2 className="section-title">Our Partners</h2>
        <p className="section-subtitle">We work with the world's finest brands</p>

        <div className="partners-row">
          {partners.map((p) => (
            <div className="partner-item" key={p.name}>
              <div className="partner-logo-box">
                <span className="partner-name">{p.name}</span>
              </div>
              <p className="partner-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
