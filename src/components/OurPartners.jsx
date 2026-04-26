import hettichLogo from '../assets/images/image 17.png';
import hafeleLogo from '../assets/images/image 18.png';
import ebcoLogo from '../assets/images/image 19.png';
import asianpaintsLogo from '../assets/images/image 20.png';
import faberLogo from '../assets/images/image 21.png';
import './OurPartners.css';

const partners = [
  { name: 'Hettich', desc: 'German Precision Hardware', logo: hettichLogo },
  { name: 'HÄFELE', desc: 'Functional Hardware', logo: hafeleLogo },
  { name: 'ebco', desc: 'Furniture Fittings', logo: ebcoLogo },
  { name: 'Asian Paints', desc: 'Premium Paints', logo: asianpaintsLogo },
  { name: 'FABER', desc: 'Kitchen Appliances', logo: faberLogo },
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
                <img src={p.logo} alt={p.name} />
              </div>
              <p className="partner-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
