import sobhaLogo from '../assets/images/image 8.png';
import brigadeLogo from '../assets/images/image 9.png';
import godrejLogo from '../assets/images/image 10.png';
import mahindraLogo from '../assets/images/image 16.png';
import jrcLogo from '../assets/images/image 22.png';
import prestigeLogo from '../assets/images/image 23.png';
import './ProjectsDelivered.css';

const partners = [
  { name: 'SOBHA', logo: sobhaLogo },
  { name: 'Brigade', logo: brigadeLogo },
  { name: 'Godrej', logo: godrejLogo },
  { name: 'Mahindra', logo: mahindraLogo },
  { name: 'JRC', logo: jrcLogo },
  { name: 'Prestige', logo: prestigeLogo },
];

export default function ProjectsDelivered() {
  return (
    <section className="projects-delivered">
      <div className="container">
        <h2 className="section-title">Projects Delivered Across</h2>
        <div className="delivered-logos">
          {partners.map((p) => (
            <div className="delivered-logo" key={p.name}>
              <div className="logo-img-box">
                <img src={p.logo} alt={p.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
