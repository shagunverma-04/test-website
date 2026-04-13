import './ProjectsDelivered.css';

const partners = [
  { name: 'Purva', abbr: 'P' },
  { name: 'SOBHA', abbr: 'S' },
  { name: 'Brigade', abbr: 'B' },
  { name: 'Godrej', abbr: 'G' },
  { name: 'Mahindra Lifescapes', abbr: 'M' },
  { name: 'JRC', abbr: 'J' },
];

export default function ProjectsDelivered() {
  return (
    <section className="projects-delivered">
      <div className="container">
        <h2 className="section-title">Projects Delivered Across</h2>
        {/*<p className="section-subtitle">Trusted by leading developers across Bengaluru</p>*/}
        <div className="delivered-logos">
          {partners.map((p) => (
            <div className="delivered-logo" key={p.name}>
              <div className="logo-placeholder">
                <span className="logo-abbr">{p.abbr}</span>
              </div>
              <span className="logo-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
